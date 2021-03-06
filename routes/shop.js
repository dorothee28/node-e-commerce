const express = require('express');
const path = require('path');

const router = express.Router();

// Route directory of path function helping for navigation
const rootDir = require('../utils/path');
const adminData = require('./admin')

router.get('/', (req, res, next) => { 
    const products = adminData.products; 
    res.render('shop', { 
        prods: products, 
        pageTitle: 'shop', 
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
        layout: false
    });
});

module.exports = router;
