const express=require("express")  //required express
require('dotenv').config(); //required .env

const app=express()   
const PORT=process.env.PORT||3000;

const path = require("path");
app.set("view engine", "ejs");
app.set('views', path.resolve("./views"))


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const {router}=require('./routes/gitroutes')
app.use("/",router)

app.listen(PORT,()=>console.log(`.....server Up at ${PORT}......`))