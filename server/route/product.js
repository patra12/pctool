const app = require('express').Router();
var multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/products/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now())
    }
})

var upload = multer({ storage: storage });
// Availing All Required Methods From  Controller For Route
const product = require('../controller/product');

// All Routes for API
app.get('/getproduct', product.getProduct);
app.get('/monoproduct/:id', product.monoProduct);
app.post('/addproduct', upload.array('productImage', 5), product.addProduct);
app.put('/putproduct/:id', product.putProduct);
app.delete('/delproduct/:id', product.delProduct);

// app.post('/test', product.callx);

module.exports = app;