
const express = require('express');
const cors=require('cors')
const app = express();
const homeRouter = require("./routes/home");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const authRouter= require("./routes/auth");
const connectDatabase = require('./database/connection');
const cockieParser = require("cookie-parser")
   
const logger = require('./middlewares/logger');
const morgan=require('morgan')

//Setting up ENV in our project
require('dotenv').config();

//Global middleware
app.use(cors()); 
app.use(logger)
app.use(morgan('dev'))
app.use(cockieParser());

//this will allow to add in req.body
app.use(express.json())

//DB Connection
connectDatabase();

app.use(homeRouter);
app.use("/api/products",productRouter);
app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);

app.get("*",(req,res)=>{
    res.send("<h1> Provided Index not found </h1>")
})

app.listen(process.env.PORT,(req,res)=>{
    console.log(`server is running on ${process.env.PORT}`)
});


