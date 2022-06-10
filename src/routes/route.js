const express = require('express');
const { createAuthor } = require('../controllers/newAuthorController');
const { createBook, getAllBook, updateBookAttribute } = require('../controllers/newBookController');
const { createPublisher } = require('../controllers/newPublisherController');
const { testapi1, testapi2, testapi3, testapi4 } = require('../controllers/testController');
const router = express.Router();

//  AUTHOR
router.post('/create-author',createAuthor)


//  PUBLISHER
router.post('/create-publisher',createPublisher)


//  BOOK
router.post('/create-book',createBook)
router.get('/get-all-book',getAllBook)
router.put('/update',updateBookAttribute)

// testing API
router.get('/test1' , testapi1)
router.get('/test2' , testapi2)
router.get('/test3' , testapi3)
router.get('/test4' , testapi4)


// host
// route { Route  path}

module.exports = router;