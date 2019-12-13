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

module.exports = app;