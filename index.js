
const express = require('express');
const cors=require('cors')
const app = express();
const homeRouter = require("./routes/home");
const productRouter = require("./routes/product");
const connectDatabase = require('./database/connection');
   
const logger = require('./middlewares/logger');
const morgan=require('morgan')

//Setting up ENV in our project
require('dotenv').config();

//Global middleware
app.use(cors()); 
app.use(logger)
app.use(morgan('dev'))

//DB Connection
connectDatabase();

app.use(homeRouter);
app.use("/api/products",productRouter);

app.get("*",(req,res)=>{
    res.send("<h1> Provided Index not found </h1>")
})

app.listen(process.env.PORT,(req,res)=>{
    console.log(`server is running on ${process.env.PORT}`)
});


