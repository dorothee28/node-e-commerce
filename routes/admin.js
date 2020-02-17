const express = require('express');
const path = require('path');

const router = express.Router();

// Route directory of path function helping for navigation
const rootDir = require('../utils/path')

// This route reach at /admin/add-product => GET Request
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir , '/views' , 'add-product.html') );
});

// This route reach at /admin/add-product => POST Request
router.post('/add-product',(req, res, next) => {
   console.log(req.body);
   res.redirect('/');
})


module.exports = router;