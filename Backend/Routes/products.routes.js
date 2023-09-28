const express = require('express');
const router = express.Router();
const { productcontroller } = require('./../Controllers')

// route for creating new product
router.post('/add-product', productcontroller.create_products);

module.exports = router;