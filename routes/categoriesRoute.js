const express = require("express");
const faker = require("faker");
const router = express.Router();

//categorias
router.get('/', (req, res) => {
  const { categoryId }= req.query;
  res.json({
    categoryId
  });
})


//categoria-producto-productoid
router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId }= req.params;
  res.json({
    categoryId,
    productId
  });
})

module.exports = router;

/*

GET     /users
GET ONE /users/:user_id
POST    /users - body
PUT     /users/:user_id - body
PATCH   /users/:user_id - partial body
DELETE  /users/:user_id

GET     /users/:user_id/permissions
GET ONE /users/:user_id/permissions/:permission_id
POST    /users/:user_id/permissions
PUT     /users/:user_id/permissions/:permission_id - body
PATCH   /users/:user_id/permissions/:permission_id - partial body
DELETE  /users/:user_id/permissions/:permission_id

*/
