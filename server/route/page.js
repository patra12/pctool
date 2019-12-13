const app = require('express').Router()

// Availing All Required Methods From  Controller For Route
const page = require('../controller/page');

//All Routes for API
app.get('/getpage', page.getPage);
app.get('/monopage/:id', page.monoPage);
app.post('/addpage', page.addPage);
// app.put('/putpage/:id', page.putPage);
app.delete('/delpage/:id', page.delPage);

module.exports = app