function logErrors(err, req, res, next) {  //las funciones que manejan errores siempre deben tener como primer parametro el error y los
  console.log('logError');
  console.error(err);                       //3 parametros restantes req, res, next
  next(err) //middleware de tipo error
}

function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload)
  }else{
    next(err);}
  }

module.exports = { logErrors, errorHandler, boomErrorHandler }
