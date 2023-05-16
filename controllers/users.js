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

module.exports={
    home,
    Index,
    getProduct,
    productFind
};