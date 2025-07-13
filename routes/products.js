const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.post('/add', controller.addProduct);
router.get('/', controller.getProducts);
router.delete('/:id', controller.deleteProduct);
router.delete('/', controller.clearAll);

module.exports = router;
