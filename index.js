
const express = require('express');
const cors=require('cors')
const app = express();
const homeRouter = require("./routes/home");
const productRouter = require("./routes/product");
   
const logger = require('./middlewares/logger');
const morgan=require('morgan')

//Global middleware
app.use(cors()); 
app.use(logger)
app.use(morgan('dev'))

app.use(homeRouter);
app.use("/api/products",productRouter);

app.get("*",(req,res)=>{
    res.send("<h1> Provided Index not found </h1>")
})
port =8080
app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`)
});


