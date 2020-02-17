const express = require('express');
const path = require('path');

const router = express.Router();

// This route reach at /admin/add-product => GET Request
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../' , '/views' , 'add-product.html') );
});

// This route reach at /admin/add-product => POST Request
router.post('/add-product',(req, res, next) => {
   console.log(req.body);
   res.redirect('/');
})


module.exports = router;