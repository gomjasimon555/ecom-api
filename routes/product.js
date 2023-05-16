const express = require('express')
const Products = require("../product/product.json")
const {productFind}=require("../controllers/users")
const router = express.Router()
const {getProduct} = require("../controllers/users")

router.get("/",getProduct)

router.get("/:productID",productFind);

module.exports = router;


