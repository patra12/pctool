const app = require('express').Router();

// Importing page routes
const test = require('./page.js');
app.use(test);

// Importing settings routes
const settings = require('./settings.js');
app.use(settings);

module.exports = app;