const express = require('express');
const path = require('path');
const adminData = require('./admin');

const rootDir = require('../util/path');

const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct); //dynamic segment of the route

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postDeleteCartItem);

router.get('/orders', shopController.getOrders);

router.post('/create-order', shopController.postOrder);

router.get('/checkout', shopController.getCheckout);



module.exports = router; 