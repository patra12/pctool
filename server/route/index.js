const app = require('express').Router();

// Importing page routes
const test = require('./page.js');
app.use(test);

// Importing settings routes
const settings = require('./settings.js');
app.use(settings);

// Importing settings user
const user = require('./user.js');
app.use(user);

// Importing settings page
const page = require('./page.js');
app.use(page);

// Importing settings page
const category = require('./category.js');
app.use(category);

// Importing settings page
const product = require('./product.js');
app.use(product);

module.exports = app;