const express = require("express");
const productService = require("./../services/productService");
const validatorHandler = require("./../middlewares/validatorHandler");
const { createProductSchema, updateProductSchema, getProductSchema } = require("./../schemas/productSchema");
const router = express.Router();
const service = new productService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
})

//endpoint especifico
//los endpoint especificos deben ir antes que los dinamicos en el codigo
router.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});
router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => { //: significa que el id es un identificador (parametro)
    try {
      const { id }= req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);  //captura el error y lo manda para ejecutar el middleware de error
    }
});
router.post('/',
validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body)
    res.status(201).json(newProduct);
});
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => { //actualizacion parcial
    try {
      const body = req.body;
      const { id } = req.params;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    };

});
router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res) => {
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
