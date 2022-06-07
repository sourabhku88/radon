const express = require('express');
const { createauthor } = require('../controllers/authorController');
const { createBooks, findBookByCost, findByNameAndsendBook, findAuthor } = require('../controllers/BooksController');
// const { createBook, bookList, getBooksInYear, getParticularBooks, getXINRBooks, getRandomBooks } = require('../controllers/BooksController');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post('/createbook',createBook);
// router.post('/getBooksInYear',getBooksInYear)
// router.post('/getParticularBooks',getParticularBooks)
// router.get('/bookList',bookList)
// router.get('/getXINRBooks',getXINRBooks)
// router.get('/getRandomBooks',getRandomBooks)


router.post('/createauthor' , createauthor)
router.post('/createbook' , createBooks)

router.get('/findByNameAndsendBook' , findByNameAndsendBook)
router.get('/findAuthor' , findAuthor)
router.get('/findBookByCost' , findBookByCost)


module.exports = router;