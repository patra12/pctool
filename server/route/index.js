const app = require('express').Router();

// Importing settings routes
const settings = require('./settings.js');
app.use(settings);

// Importing user routes
const user = require('./user.js');
app.use(user);

// Importing page routes
const page = require('./page.js');
app.use(page);

// Importing category routes
const category = require('./category.js');
app.use(category);

// Importing product routes
const product = require('./product.js');
app.use(product);

// Importing orders routes
const orders = require('./orders.js');
app.use(orders);

// Importing tempCart routes
const tempCart = require('./tempCart.js');
app.use(tempCart);

// Importing tempCart routes
const checkout = require('./checkout.js');
app.use(checkout);

// Importing mail routes
const mail = require('./mail.js');
app.use(mail);

module.exports = app;