const Products = require("../product/product.json")

 const home=(req,res)=>{
    res.send("<h1>HELLO WELCOME TO PRACTICE SESSION </h1>")
}
const Index=(req,res)=>{
    res.send("<h1> Provided Index not found </h1>")
}

const getProduct = (req,res)=>{
    res.send(Products)
}

const productFind =(req,res)=>{
    console.log(req.params)
    const {productID} = req.params;
    const products = Products.find(product => product.id === Number(productID))
    res.json(products ? products : res.send("<h1>Products not found</h1>"))
}

const getPost= (req, res) => {
    res.send("This api will create product in database");
  }

  const replaceData=(req, res) => {
    res.send("This api will replace product in database");
  }
  const updateData=(req, res) => {
    res.send("This api will update product in database");
  }
  const deleteData=(req, res) => {
    res.send("This api will delete product in database");
  }



module.exports={
    home,
    Index,
    getProduct,
    productFind,
    getPost,
    replaceData,
    updateData,
    deleteData
};