import prisma from '../../prisma/prismaClient';
import crypto from 'crypto';
import { text } from 'micro';
const { Client, Environment, ApiError } = require('square');

const SIGNATURE_KEY = process.env.SQUARE_WEBHOOK_SIGNATURE;
const NOTIFICATION_URL = process.env.SQUARE_WEBHOOK_URL;

const client = new Client({
  environment: Environment.Production,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
});

const { ordersApi } = client;

const fulfillOrder = async (order) => {
  try {
    const newOrder = await prisma.order.create({
      data: {
        id: order.id,
        total: order.total_money.amount / 100,
        products: {
          createMany: {
            data: order.line_items.map((item) => ({
              productId: item.metadata.productId,
              quantity: item.quantity,
              rentalDate: item.metadata.rentalDate,
            })),
          },
        },
      },
    });
    return newOrder;
  } catch (error) {
    console.log('Prisma error creating order', error);
  }
};

const retrieveOrder = async (orderId) => {
  try {
    const response = await ordersApi.retrieveOrder(orderId);
    console.log('Order retrieved successfully:', response.result.order);
    return response.result.order;
  } catch (error) {
    if (error instanceof ApiError) {
      console.log('Errors:', error);
    }
    throw error;
  }
};

const isFromSquare = (signature, body) => {
  const hmac = crypto.createHmac('sha256', SIGNATURE_KEY);
  hmac.update(NOTIFICATION_URL + body);
  const hash = hmac.digest('base64');

  return hash === signature;
};

export default async function webhook(req, res) {
  if (req.method === 'POST') {
    let body = await text(req, { encoding: 'utf8' });
    const signature = req.headers['x-square-hmacsha256-signature'];

    if (isFromSquare(signature, body)) {
      // signature is valid
      res.status(200).json({ message: 'Signature is valid' });
      const data = JSON.parse(body).data.object.payment;
      console.log('Signature is valid');
      if (data.status === 'COMPLETED') {
        console.log('Payment is completed');

        const session = await retrieveOrder(data.order_id);

        const newOrder = fulfillOrder(session.order)
          .then(async () => {
            await prisma.$disconnect();
          })
          .catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
          });
      } else {
        console.log('Payment is not completed');
      }
    } else {
      // signature is invalid
      console.log('Signature is invalid');
      res.status(400).json({ message: 'Signature is invalid' });
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
