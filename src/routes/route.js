const express = require('express');
const { createAuthor } = require('../controllers/newAuthorController');
const { createBook, getAllBook } = require('../controllers/newBookController');
const { createPublisher } = require('../controllers/newPublisherController');
const router = express.Router();


//  AUTHOR
router.post('/create-author',createAuthor)


//  PUBLISHER
router.post('/create-publisher',createPublisher)


//  BOOK
router.post('/create-book',createBook)
router.get('/get-all-book',getAllBook)


module.exports = router;