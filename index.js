const express = require("express");
// data base
const database = require("./database");
//Initialise express
const booky = express();

/*
Route           /
Description     Get all books
Access          Public
Parameter       NONE
Methods         GET
*/

booky.get("/",(req,res) => {
  return res.json({books: database.books});
});

/*
Route           /is
Description     Get specific book on ISBN
Access          Public
Parameter       isbn
Methods         GET
*/

booky.get("/is/:isbn",(req,res) => {
  const getSpecificBook = database.books.filter(
    (book) => book,ISBN === req.params.isbn
  );

  if(getSpecificBook.length ===0) {
    return res.json{error:`No book found for the Isbn of ${req.params.isbn}`});
  }

  return res.json({book: getSpecificBook});

});

/*
Route           /c
Description     Get specific book
Access          Public
Parameter       category
Methods         GET
*/

booky.get("/c/:category", (req,res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.category.includes(req.params.category);
  )

  if(getSpecificBook.length ===0) {
    return res.json({error: `No book found for this category of ${req.params.category}`})
  }

  return res.json({book: getSpecificBook});

});

booky.listen(3000),() => {
  console.log("server is up and running");
});
