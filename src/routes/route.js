const express = require('express');
const router = express.Router();
const { getBooksData, createNewBook ,} = require('../controllers/bookController.js');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post('/create/book' , createNewBook)

router.get('/getallbooks' ,getBooksData )

module.exports = router;