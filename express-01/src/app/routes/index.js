const express = require('express');
const router = express.Router();
const home = require('./../controllers/home');
const about = require('./../controllers/about');
const contact = require('./../controllers/contact');

router.get('/', home);
router.get('/about', about);
router.get('/contact', contact);

module.exports = router;