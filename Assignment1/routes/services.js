'use strict';
var express = require('express');
var router = express.Router();

/* GET services page. */
router.get('/', function (req, res) {
    res.render('services', { title: 'Services' });
});

module.exports = router;