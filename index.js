const express = require("express");
// data base
const database = require("./database");
//Initialise express
const booky = express();

booky.get("/",(req,res) => {
  return res.json({books: database.books});
});

booky.listen(3000),() =>{
  console.log("server is up and running");
});
