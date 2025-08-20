require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

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

app.listen(PORT, () => {
  console.log(`.....server Up at http://localhost:${PORT}/analyzer ......`);
});
