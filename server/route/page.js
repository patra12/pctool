const app = require('express').Router()

// Availing All Required Methods From  Controller For Route
const page = require('../controller/page');

//All Routes for API
app.post('/addpage', page.addPage );

module.exports = app
