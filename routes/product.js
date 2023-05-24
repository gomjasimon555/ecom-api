const express = require('express')
const Products = require("../product/product.json")
const {productFind,getPost, replaceData,updateData,deleteData}=require("../controllers/users")

const {getProduct} = require("../controllers/users")
const checkAPIKey = require("../middlewares/auth")

//initiliaze router object
const router = express.Router()

router.get("/",checkAPIKey,getProduct)

router.get("/:productID",productFind);


router.post("/",getPost);
  router.put("/:productID",replaceData);
  router.patch("/:productID",updateData);
  router.delete("/:productID", deleteData);

module.exports = router;


