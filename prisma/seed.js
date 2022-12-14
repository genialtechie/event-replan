const prisma = require('./prismaClient');

async function main() {
  let jumps = [];
  let concessions = [];
  let slides = [];

  jumps.push({
    name: 'Disney Princess Bounce House',
    slug: 'disney-bounce-house',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1670980849/jainflatables/product3_y32xjv.png',
    price: 140,
    description:
      "Introducing the Disney Princess Bounce House! This bouncy castle features all your favorite Disney Princesses and a built-in basketball hoop. Perfect for any little princess's birthday party or special event. Order now and let the royal fun begin!",
  });

  jumps.push({
    name: 'Birthday Cake Bounce House',
    slug: 'birthday-cake-bounce-house',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1670980850/jainflatables/product2_ccdymb.png',
    price: 135,
    description:
      "Our Birthday Cake Bounce House! This bouncy castle features a giant birthday cake with candles and sprinkles. Perfect for any child's birthday party. Order now and let the birthday fun begin!",
  });

  jumps.push({
    name: 'Dream Castle Bounce House',
    slug: 'dream-castle-bounce-house',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1670980848/jainflatables/product4_tvwzxr.png',
    price: 125,
    description:
      "Introducing the Castle Bounce House! This bouncy castle is designed to look like a real castle, complete with a drawbridge and towers. Perfect for any child's royal-themed birthday party",
  });

  jumps.push({
    name: 'Sesame Street Bounce House',
    slug: 'sesame-street-bounce-house',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1670980855/jainflatables/product5_qaiwf0.png',
    price: 140,
    description:
      "Introducing the Sesame Street Bounce House! This bouncy castle features all your favorite Sesame Street characters. Perfect for any child's birthday party or special event. Order now and let the fun begin!",
  });

  jumps.push({
    name: 'Sports Arena Bounce House',
    slug: 'sports-arena-bounce-house',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1670980852/jainflatables/product6_gvcslx.png',
    price: 130,
    description:
      "Introducing the Sports Arena Bounce House! This bouncy castle features a basketball hoop, soccer goal, and baseball bat. Perfect for any child's birthday party or special event. Order now and let the games begin!",
  });

  slides.push({
    name: 'Tropical Splash Water Slide',
    slug: 'tropical-splash-water-slide',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1670980855/jainflatables/product7_wxtfbd.png',
    price: 325,
    description:
      'Introducing the Tropical Splash Water Slide! This water slide features palm trees, exotic flowers, and a built-in pool at the bottom. Perfect for any summer party or event. Order now!',
  });

  slides.push({
    name: 'Hoop-It-Up Water Slide',
    slug: 'hoop-shoot-water-slide',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1670983274/jainflatables/product8_aik3mb.png',
    price: 80,
    description:
      'The Hoop-It-Up Water Slide is a great addition to any party or event. This water slide features a basketball hoop at the top and a built-in pool at the bottom. Order now and let the fun begin!',
  });

  slides.push({
    name: 'Summer Splash Water Slide',
    slug: 'summer-splash-water-slide',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1670980856/jainflatables/product1_pdnkwe.png',
    price: 300,
    description:
      'The Summer Splash Water Slide features a shaded area at the top and a built-in pool at the bottom. Perfect for any summer party or event. Order now and let the fun begin!',
  });

  concessions.push({
    name: 'Popcorn Machine',
    slug: 'popcorn-machine',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1670980854/jainflatables/product9_sviexm.png',
    price: 60,
    description:
      'The Popcorn Machine is a great addition to any party or event. This machine features a 6oz kettle and a 50 servings capacity. Order now!',
  });

  concessions.push({
    name: 'Cotton Candy Machine',
    slug: 'cotton-candy-machine',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1671071972/jainflatables/product11_omt6et.png',
    price: 60,
    description:
      'The Cotton Candy Machine is a great addition to any party or event. This machine has a 50 servings capacity. Order now!',
  });

  concessions.push({
    name: 'Snow Cone Machine',
    slug: 'snow-cone-machine',
    image_url:
      'https://res.cloudinary.com/dpti4rlt1/image/upload/v1671071972/jainflatables/product10_t7wyod.png',
    price: 60,
    description:
      'The Snow Cone Machine is a great addition to any party or event. This machine has a 50 servings capacity. Order now!',
  });

  await prisma.category.create({
    data: {
      name: 'Bounces',
      products: {
        createMany: {
          data: jumps,
        },
      },
    },
  });

  await prisma.category.create({
    data: {
      name: 'Water Slides',
      products: {
        createMany: {
          data: slides,
        },
      },
    },
  });

  await prisma.category.create({
    data: {
      name: 'Concessions',
      products: {
        createMany: {
          data: concessions,
        },
      },
    },
  });

  console.log('Data seeded successfully');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
