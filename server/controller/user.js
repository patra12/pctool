var pool = require("../db/db")

module.exports = {
	async getUser(req, res) {
		selectQuery = "SELECT * FROM `user`";
		pool.query(selectQuery)
			.then(row => {
				res.send(row);
			})
			.catch(err => {
				console.log('getUser Query Error', err)
				res.end();
			});
	},

	async monoUser(req, res) {
		selectQuery = "SELECT * FROM `user` where `userId`= ?";
		pool.query(selectQuery, [req.params.id])
			.then(row => {
				res.send(row);
			})
			.catch(err => {
				console.log('getUser Query Error', err)
				res.end();
			});
	},

	async addUser(req, res) {

		first_name = req.body.firstName;
		last_name = req.body.lastNname;
		password = req.body.password;
		email = req.body.email;
		phone = req.body.phone;
		status = req.body.status;

		inserQuery = "INSERT INTO `user`(`first_name`, `last_name`, `password`, `email`, `phone`, `status`";
		inserQuery += ")VALUES(";
		inserQuery += " ?,";
		inserQuery += " ?,";
		inserQuery += " ?,";
		inserQuery += " ?,";
		inserQuery += " ?,";
		inserQuery += " ?)";
		pool.query(inserQuery, [first_name, last_name, password, email, phone, status])
			.then(row => {
				res.send("Date is inserted");
			})
			.catch(err => {
				console.log("addUser Query Error", err);
				res.end();
			});
	},
	async delUser(req, res) {

		deleteQuery = "DELETE FROM `user` WHERE userId = " + req.params.id;
		pool.query(deleteQuery)
			.then(row => {
				res.send("Data deleted");
			})
			.catch(err => {
				console.log("delUser Query Error ", err);
				res.end();
			});
	},

	async putUsre(req, res) {
		first_name = req.body.firstName;
		last_name = req.body.lastNname;
		password = req.body.password;
		email = req.body.email;
		phone = req.body.phone;
		status = req.body.status;
		id = req.params.id;

		updateQuery = "UPDATE `user` SET";
		updateQuery += "`first_name`= ?,";
		updateQuery += "`last_name`= ?,";
		updateQuery += "`password`= ?,";
		updateQuery += "`email`= ?,";
		updateQuery += "`phone`= ?,";
		updateQuery += "`status`= ? ";
		updateQuery += "WHERE `userId` = ?";
		pool.query(updateQuery, [first_name, last_name, password, email, phone, status, id])
			.then(row => {
				res.send("Data Updated");
			})
			.catch(err => {
				console.log("putUser Query Error ", err);
				res.end();
			})
	}

}
