const express = require("express");
const routerApi = require("./routes");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())
const port = 3000;

  app.get('/', (req, res) => {
    res.send('hola, mi server en express');
  })


  app.get('/nueva-ruta', (req, res) => {
    res.send('esta es una nueva ruta');
  })

  routerApi(app);

  app.listen(port, () => {
    console.log('mi puerto ' + port);
  })
//categoria-productos
/*app.get('/categories/:categoryId/:products', (req, res) => {
  const { categoryId, productId }= req.params;
  res.json([{
    categoryId,
    productId,
    price: 1000
  },
  {
    categoryId,
    productId,
    price: 500
  },
  {
    categoryId,
    productId,
    price: 600
  },
  {
    categoryId,
    productId,
    price: 990
  },
  {
    categoryId,
    productId,
    price: 1200
  }])
})*/


//usuario

