const productController = require('../controllers/ProductController');
const express = require('express');
const router = express.Router();
router.post('/insert', productController.insertProduct);
router.get('/get', productController.getProducts);
router.get('/get/:id', productController.getProductsById);
module.exports = router;