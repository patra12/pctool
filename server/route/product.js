const app = require('express').Router();
var multer = require("multer");

const fileUpload = require('express-fileupload');
// default options
app.use(fileUpload());
// var storage = multer.diskStorage({
//     // destination: function (req, file, cb) {
//     //     cb(null, 'upload/products/')
//     // },
//     // filename: function (req, file, cb) {
//     //     cb(null, file.originalname + '-' + Date.now())
//     // }
// });

var up = multer({
    dest: 'upload/products/'
});

// var upload = multer({ storage: storage });
// Availing All Required Methods From  Controller For Route
const product = require('../controller/product');

// All Routes for API
app.get('/getproduct', product.getProduct);
app.get('/monoproduct/:id', product.monoProduct);
app.post('/addproduct', product.addProduct, product.x);
app.put('/putproduct/:id', product.putProduct);
app.delete('/delproduct/:id', product.delProduct);

// app.post('/test', product.callx);

module.exports = app;