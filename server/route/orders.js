const app = require('express').Router();
const orders = require("../controller/orders");

// All Routes for API
app.get('/orders', orders.getOrders);
app.get('/orderdetailse/:id', orders.orderDetailse);

module.exports = app;
