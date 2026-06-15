const productController = require('../controllers/ProductController');
const express = require('express');
const router = express.Router();
router.post('/insert', productController.insertProduct);
module.exports = router;