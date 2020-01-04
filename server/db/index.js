var mysql = require('mysql');
require('dotenv').config()
var pool;
pool =
	mysql.createPool({
		connectionLimit: 100, //importent 
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		database: process.env.DB_NAME,
		password: process.env.PASSWORD,
		debug: false,
	});
pool.getConnection((err, con) => {
	if (err) {
		//log db error message to server and stop execution
		console.log("DB ERROR", err);
		res.end();
	}
	else {
		return con;
	}
});

module.exports = pool;