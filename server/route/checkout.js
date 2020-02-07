const app = require('express').Router()

// Availing All Required Methods From  Controller For Route
const checkout = require('../controller/checkout');

//All Routes for API
app.get('/getPagebirja', checkout.getPagebirja);
app.post('/addnewOrder', checkout.addnewOrder);


module.exports = app