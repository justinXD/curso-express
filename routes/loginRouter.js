const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.send('esto es un loging')
})

router.post('/', (req, res) => {
  console.log('backend', req.body)
  res.send({ response: 'Acceso correcto'})
})

module.exports = router;
