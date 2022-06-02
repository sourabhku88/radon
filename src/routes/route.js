const express = require("express");
const lodash = require('lodash')
const logger = require("../logger/logger");
const helper = require("../util/helper");
const validation = require("../validator/formatter");

const router = express.Router();

router.get("/test-me", function (req, res) {
  logger.welcome();
  res.send("My first ever api!");
});

router.get("/test-me1", function (req, res) {
  res.send("My second ever api!");
  validation.trim();
  validation.changeToUpperCase();
  validation.changetoLowerCase();
});

router.get("/test-me2", function (req, res) {
    helper.printDate();
    helper.printMonth();
    helper.getBatchInfo();
  res.send("My third api!");
});

router.get('/hello',(req,res)=>{
// first proble
const months = ['January ','February ','March','April','May','June','July','August','September','October','November','December']
const dividedMonthArray = lodash.chunk(months , 3);



const tenOldNumber = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const lastNineOldNumber = lodash.tail(tenOldNumber);

// find uniqe Value in arrar
const UniqeValue =lodash.union([1,2,3,8,5,6],[1,7,89,9],[1,56,2,8,6,3,],[1,5,8,9,3],[45,78,65,6,2])

// conver array to object
const movieArray =[["horror","The Shining"],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
const arrayConverInObject = lodash.fromPairs(movieArray);



console.log(arrayConverInObject);
console.log(UniqeValue);
console.log(lastNineOldNumber);
console.log(dividedMonthArray);

  res.send('working hello API')
})


  
module.exports = router;
// adding this comment for no reason
