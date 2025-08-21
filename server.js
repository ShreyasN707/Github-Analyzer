const express = require("express");
const app = express();

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { router } = require("./routes/gitroutes");
app.use("/", router);

const fs = require('fs');

setInterval(()=>{
  fs.unlink('Server_logs.txt', (err) => {
  if (err) {
    console.error("Error deleting file:", err);
    return;
  }
  console.log("File deleted successfully!");
});
},28800000)

const {cores}=require('./CPUopt')
cores(app)



