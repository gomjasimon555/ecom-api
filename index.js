
const express = require('express');
const app = express();
const homeRouter = require("./routes/home");
const productRouter = require("./routes/product");
app.use(homeRouter);
app.use("/api/products",productRouter);
app.get("*",(req,res)=>{
    res.send("<h1> Provided Index not found </h1>")
})
port =8080
app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`)
});


