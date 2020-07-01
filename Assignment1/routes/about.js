'use strict';
var express = require('express');
var router = express.Router();

/* GET About Me page */
router.get('/', function (req, res) {
    res.send('about', { title: 'About Me' });
});

module.exports = router;