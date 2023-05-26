const ProductModel = require("../models/Product");

const getAllProducts = async (req,res)=>{
  const{ category, minprice, page,pagesize}=req.query;

  try{
//Apply filter here

if (category && minprice){
  const categories = await ProductModel.find
  ({category, price: {price:{$gte:minprice}}});
  res.json(categories)
  }
else if (category) {
  const filtered = await ProductModel.find({category});
  res.json(filtered);
  }

 else if (minprice) {
  const filtered = await ProductModel.find({price:{$gte:minprice}});
  res.json(filtered);
  }

else {
  const productData = await ProductModel.find().limit(pagesize).skip((page-1)*pagesize);
  res.json(productData);
}

}
catch(err){
  res.status(500).json({ message: "Something went wrong", error: err });
}

};

 const home=(req,res)=>{
    res.send("<h1>HELLO WELCOME TO PRACTICE SESSION </h1>")
}
const Index=(req,res)=>{
    res.send("<h1> Provided Index not found </h1>")
}



const getSingleProduct = async (req,res)=>{
  try{
  const {productID} = req.params;
  const product = await ProductModel.findById(productID)
  res.json(product ? product :"Data Not Found");
  }catch(err){
    console.log("SOmething went wrong")
    res.sendStatus(500).json({message:"Something went wrong", error: err})
  }
};

  const getPost= async(req, res) => {
   console.log(req.body)

   try{
    const product = await ProductModel.create(req.body)
    res.status(200).json(product)

   }catch(err){
    console.log("Something went wrong");
    res.status(500).json({message:"Something went wrong",error: err});
   }
  }

  const replaceData= async(req, res) => {
    const { productID }= req.params;
   try{
      const product = await ProductModel.findOneAndReplace({_id : productID}, req.body,{new:true})
      res.status(200).json(product)
  
     }catch(err){
      console.log("Something went wrong");
      res.status(500).json({message:"Something went wrong",error: err});
     }
   }
  const updateData= async(req, res) => {
    const { productID }= req.params;
    try{
       const product = await ProductModel.findByIdAndUpdate(productID, req.body,{new:true})
       res.status(200).json(product)
   
      }catch(err){
       console.log("Something went wrong");
       res.status(500).json({message:"Something went wrong",error: err});
      }
  }


  const deleteData= async (req, res) => {
       const { productID }= req.params;
    try{
       const product = await ProductModel.findByIdAndDelete(productID);
       res.status(200).json(product)
   
      }catch(err){
       console.log("Something went wrong");
       res.status(500),json({message:"Something went wrong",error: err});
      }
  }



module.exports={
    home,
    Index,
  getSingleProduct,
  getAllProducts,
    getPost,
    replaceData,
    updateData,
    deleteData
};