const app = require('express').Router();

// Availing All Required Methods From  Controller For Route
const category = require('../controller/category');

// All Routes for API
app.get('/getcategory', category.getCategory);
app.get('/monocategory/:id', category.monoCategory);
app.post('/addcategory', category.addCategory);
app.put('/putcategory/:id', category.putCategory);
app.delete('/delcategory/:id', category.delCategory);

module.exports = app;