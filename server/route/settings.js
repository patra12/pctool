const app = require('express').Router()

// Availing All Required Methods From  Controller For Route
const settings = require('../controller/settings');

//All Routes for API
app.get('/getSetings', settings.getSetings);
app.put('/updateSetings', settings.updateSettings);

module.exports = app