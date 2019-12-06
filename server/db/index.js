var mysql = require('mysql');

var pool  =
	mysql.createPool({
		connectionLimit:100, //importent 
		host :'localhost',
		user:'root',
		database:'node_pctool',
		password:'',
		debug:false,
	});


module.exports = pool;