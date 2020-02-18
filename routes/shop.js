const express = require('express');
const path = require('path');

const router = express.Router();

// Route directory of path function helping for navigation
const rootDir = require('../utils/path');
const adminData = require('./admin')

router.get('/', (req, res, next) => {  
    res.render('shop')
});

module.exports = router;
