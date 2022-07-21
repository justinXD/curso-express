const express = require("express");
//const faker = require("faker");
const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset }= req.query; //const { userId }= req.params; esto es sintaxis de ES6. req.query nos requiere parametros query
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  }else{
    res.send('no hay parametros')
  }
})

module.exports = router;
