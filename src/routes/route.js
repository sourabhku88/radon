const express = require('express');
const { createOrder } = require('../controllers/orderController');
const { createProduct } = require('../controllers/productController');
const { createUser } = require('../controllers/userController');
const { isPresentisFreeAppUser } = require('../middlewares/checkHeader');
const router = express.Router();


router.post("/create-product", createProduct);

router.post('/create-user', isPresentisFreeAppUser , createUser)

router.post('/create-order' ,isPresentisFreeAppUser , createOrder )
module.exports = router;