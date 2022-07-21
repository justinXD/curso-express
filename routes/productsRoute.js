const express = require("express");
const faker = require("faker");
const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }
  res.json(products);
})

//endpoint especifico
//los endpoint especificos deben ir antes que los dinamicos en el codigo
router.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});
router.get('/:id', (req, res) => { //: significa que el id es un identificador (parametro)
  const { id }= req.params;
  res.json({
    id,
    name: "product 2",
    price: 500
  });
});

module.exports = router;
