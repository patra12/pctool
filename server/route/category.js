const app = require('express').Router();
// var multer = require("multer");

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'upload/categories/')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname + '-' + Date.now())
//     }
// })


// var upload = multer({ storage: storage });
// Availing All Required Methods From  Controller For Route
const category = require('../controller/category');

// All Routes for API
app.get('/getcategory', category.getCategory);
app.get('/monocategory/:id', category.monoCategory);
app.post('/addcategory', category.addCategory);
app.put('/putcategory/:id', category.putCategory);
app.delete('/delcategory/:id', category.delCategory);

app.get('/getallctegorynames', category.getCategoryNames);
app.post('/getctegoryid', category.getCategoryId);


module.exports = app;