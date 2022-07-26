//const e = require("express");
const express = require("express");
//const faker = require("faker");
const productService = require("./../services/productService");
const router = express.Router();
const service = new productService();

router.get('/', async (req, res) => {
  /*const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }*/
  const products = await service.find();
  res.json(products);
})

//endpoint especifico
//los endpoint especificos deben ir antes que los dinamicos en el codigo
router.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});
router.get('/:id', async (req, res) => { //: significa que el id es un identificador (parametro)
  const { id }= req.params;
  const product = await service.findOne(id);
  res.json(product);
});
router.post('/',async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body)
  res.status(201).json(newProduct);
});
router.patch('/:id', async (req, res) => { //actualizacion parcial
  try {
    const body = req.body;
    const { id } = req.params;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  };

});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delate(id);
  res.json(rta)
});
/*
router.put('/:id',(req, res) => { //actualizacion completa, usar si vamos a actualizar todos los datos
  const body = req.body;
  const { id } = req.params;
  res.json({
    message: 'update',
    data: body,
    id
  })
});
*/

module.exports = router;
