'use strict';
var express = require('express');
var router = express.Router();

/* GET projects page. */
router.get('/', function (req, res) {
    res.render('projects', { title: 'Projects' });
});

module.exports = router;