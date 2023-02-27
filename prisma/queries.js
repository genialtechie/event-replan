import prisma from './prismaClient';

export const getAvailableProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      include: { category: true, orders: true },
    });
    return products;
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

export const getCategories = async () => {
  try {
    const categories = await prisma.category.findMany();
    return categories;
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

export const getCategoryProducts = async (category) => {
  try {
    const products = await prisma.product.findMany({
      include: { category: true },
      where: {
        category: {
          name: category,
        },
      },
    });
    return products;
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

export const getFilteredProducts = async (filter) => {
  try {
    const products = await prisma.product.findMany({
      include: { category: true },
      orderBy: {
        price: filter,
      },
    });
    return products;
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
