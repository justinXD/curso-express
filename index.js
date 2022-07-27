const express = require("express");
const routerApi = require("./routes");
const cors = require('cors');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler')

const app = express();
app.use(express.json());
//app.use(cors())

const port = process.env.PORT || 3000;

//este bloque es para permitir o negar el acceso a nuestra api desde diferentes servidores o dominios
const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true)
    } else{
      callback(new Error('No permitido'));
    }
  }
}

  app.get('/', (req, res) => {
    res.send('hola, mi server en express');
  })
app.use(cors(options))



  app.get('/nueva-ruta', (req, res) => {
    res.send('esta es una nueva ruta');
  })

  routerApi(app);
  //el manejo de errores va despues del routing, el manejo de errores se debe hacer de forma secuencial

  app.use(logErrors);
  app.use(boomErrorHandler)
  app.use(errorHandler);

  app.listen(port, () => {
    console.log('mi puerto ' + port);
  });


