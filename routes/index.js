const express = require('express');

const productsRouter = require('./productsRoute');
const usersRoute = require('./usersRoute');
const categoriesRouter = require('./categoriesRoute');
const loginRouter = require('./loginRouter');

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRouter);
  router.use('/users', usersRoute);
  router.use('/categories', categoriesRouter);
  router.use('/login', loginRouter);
}

// function routerApi(app) {
//   app.use('/products', productsRouter)
// }

module.exports = routerApi;
