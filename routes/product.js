const express = require("express");
const {
  getSingleProduct,
  getAllProducts,
  getPost,
  replaceData,
  updateData,
  deleteData,
} = require("../controllers/product");

const checkAPIKey = require("../middlewares/auth");

//initiliaze router object
const router = express.Router();

router.get("/", checkAPIKey, getAllProducts);

router.get("/:productID", getSingleProduct);

router.post("/", getPost);
router.put("/:productID", replaceData);
router.patch("/:productID", updateData);
router.delete("/:productID", deleteData);

module.exports = router;
