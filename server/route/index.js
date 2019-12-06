const app = require('express').Router();

// Importing page routes
const test = require('./page.js');
app.use(test);

module.exports = app;