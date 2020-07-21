const express = require('express');
const app = express();
const router = require('../app/routes/index');

app.use('/', router);

module.exports = app;