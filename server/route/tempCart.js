const app = require('express').Router()

const tempCart = require('../controller/tempCart');

//Allfor temp order
app.post('/addProductId', tempCart.addProductId);
app.get('/gettotaldata/:id', tempCart.gettotaldata);
app.get('/getDataCartpage/:id', tempCart.getDataCartpage);
app.delete('/delData/:id', tempCart.delData);
app.put('/updatequantity',tempCart.updateQuantity);

app.delete('/flushData/:id', tempCart.flushData);

module.exports = app;