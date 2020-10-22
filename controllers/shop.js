const Product = require('../models/product');


exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            title: 'Shop',
            path: '/',
        })
    });
}
exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            title: 'All Products ',
            path: '/products',
        })
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart',
        {
            title: 'Your Cart',
            path: '/cart',
        })

}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout',
        {
            title: 'Your checkout',
            path: '/checkout',
        })

}