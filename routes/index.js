const productsRouter = require('./productsRoute');
const usersRoute = require('./usersRoute');
const categoriesRouter = require('./categoriesRoute');
const loginRouter = require('./loginRouter');

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/users', usersRoute);
  app.use('/categories', categoriesRouter);
  app.use('/login', loginRouter);
}

// function routerApi(app) {
//   app.use('/products', productsRouter)
// }

module.exports = routerApi;
