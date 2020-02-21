const express = require('express');
const path = require('path');

const router = express.Router();

// Route directory of path function helping for navigation
const rootDir = require('../utils/path')

const products = [];

// This route reach at /admin/add-product => GET Request
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true ,
      activeAddProduct: true
    })
});

// This route reach at /admin/add-product => POST Request
router.post('/add-product',(req, res, next) => {
  products.push({ title: req.body.title });
   res.redirect('/');
})


exports.routes = router;
exports.products = products;