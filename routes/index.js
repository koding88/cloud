var express = require('express');
const BookModel = require('../models/BookModel');
var router = express.Router();

router.get('/', async (req,res)=>{
  //SQL: SELECT * FROM book'
  //Lấy dữ liêu từ collection "book" và lưu vào trong aray"books"
  var books = await BookModel.find();
  
  // console.log(books);
  // res.send(books);

  //Render ra file "book_list.hbs" nằm trong views
  res.render("book_list", { books: books})
})

module.exports = router
