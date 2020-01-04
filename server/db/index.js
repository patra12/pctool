var mysql = require('mysql');
var pool;
pool =
	mysql.createPool({
		connectionLimit: 100, //importent 
		host: 'localhost',
		user: 'root',
		database: 'node_pctool',
		password: '',
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