const app = require('express').Router();
const product = require('../controller/product');

// All Routes for API
app.get('/getproduct', product.getProduct);
app.get('/monoproduct/:id', product.monoProduct);
app.post('/addproduct', product.addProduct); // upload.array('productImage', 5),
app.put('/putproduct/:id', product.putProduct);
app.delete('/delproduct/:id', product.delProduct);

// app.get('/getimagestatus/:id', product.getImageStatus);
app.get('/getimages/:id', product.getImages);



module.exports = app;