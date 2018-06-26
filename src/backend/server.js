// server.js
const faker = require('faker')
const axios = require('axios')

async function generateProducts () {
  var products = []

  const images = (await axios('https://picsum.photos/list')).data.map(image => image.id);

  for (var id = 1; id <= 15; id++) {
    products.push({
      id : id,
      name: faker.commerce.productName(),
      price: Math.ceil(faker.finance.amount() % 150)-0.01,
      shortDescription: faker.lorem.sentence(),
      longDescription: faker.lorem.paragraphs(),
      imageUrls: randomUrls(images),
      inventory: (faker.random.number() % 15)+1,
      shipping: Math.floor(faker.random.number() % 10)
    })
  }

  return products
}

function generateProfile () {
  return profile = {
    'firstName': 'Mimi',
    'lastName': 'Castellano'
  }
}

function randomUrls(images) {
  return Array.from({length: 3 }, () => 
    'https://picsum.photos/800/680?id=' + Number(images[faker.random.number()%images.length]));
}

generateProducts ().then((products) => {
  const jsonServer = require('json-server')
  const server = jsonServer.create()
  const router = jsonServer.router({ products, profile: generateProfile() })
  const middlewares = jsonServer.defaults()
   
  server.use(middlewares)
  server.use(router)
  server.listen(3000, () => {
    console.log('Mimecart server is running')
  })
})
