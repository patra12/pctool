var pool = require("../db")

module.exports = {
	getUser: (req, res) => {
		pool.getConnection((err, con) => {
			if (!err) {
				selectQuery = "SELECT * FROM `user`";
				con.query(selectQuery, (err, row) => {
					con.release();
					if (!err) {
						res.send(row);
					}
					else {
						console.log('getUser Query Error', err)
						res.end();
					}
				});
			}
			else {
				console.log("getUser Db Error", err);
				res.end();
			}
		})
	},

	monoUser: (req, res) => {
		pool.getConnection((err, con) => {
			if (!err) {
				selectQuery = "SELECT * FROM `user` where `userId`= ?";
				con.query(selectQuery, [req.params.id], (err, row) => {
					con.release()
					if (!err) {
						res.send(row);
					}
					else {
						console.log('getUser Query Error', err)
						res.end();
					}
				});
			}
			else {
				console.log("getUser Db Error", err);
				res.end();
			}
		})
	},

	addUser: (req, res) => {
		pool.getConnection((err, con) => {
			if (!err) {
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
				con.query(inserQuery, [first_name, last_name, password, email, phone, status], (err, row) => {
					con.release()
					if (!err) {
						res.send("Date is inserted");
					}
					else {
						console.log("addUser Query Error", err);
						res.end();
					}
				})
			}
			else {
				console.log("addUser DB ERROR", err);
				res.end();
			}

		})
	},
	delUser: (req, res) => {
		pool.getConnection((err, con) => {
			if (!err) {
				deleteQuery = "DELETE FROM `user` WHERE userId = " + req.params.id;
				console.log(deleteQuery);
				con.query(deleteQuery, (err, row) => {
					con.release()
					if (!err) {
						res.send("Data deleted successfully");
						console.log();
					}
					else {
						console.log("delUser Query Error ", err);
						res.end();
					}
				})
			}
			else {
				console.log("delUser DB ERROR", err);
				res.end();
			}
		});
	},
	putUsre: (req, res) => {
		pool.getConnection((err, con) => {
			if (!err) {
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
				con.query(updateQuery, [first_name, last_name, password, email, phone, status, id], (err, row) => {
					con.release()
					if (!err) {
						res.send("Data Updated successfully");
					}
					else {
						console.log("putUser Query Error ", err);
						res.end();
					}
				})
			}
			else {
				console.log("putUser DB ERROR", err);
				res.end();
			}
		});
	}

}
