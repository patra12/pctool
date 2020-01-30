const app = require('express').Router();

// Availing All Required Methods From  Controller For Route
const user = require('../controller/user');

//All Routes for API
app.get('/getuser', user.getUser);
app.get('/monouser/:id', user.monoUser);
app.post('/adduser', user.addUser);
app.put('/putuser/:id', user.putUsre);
app.delete('/deluser/:id', user.delUser);

module.exports = app;