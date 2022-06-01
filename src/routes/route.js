const express = require("express");

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

router.get("/test-me3", function (req, res) {
  res.send("My 4th api!");
});

router.get("/test-me4", function (req, res) {
  res.send("My last api!");
});

module.exports = router;
// adding this comment for no reason
