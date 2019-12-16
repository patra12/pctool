var pool = require("../db")
var tableName = 'category';
module.exports = {
	// get all Record from a table
	getCategory: (req, res) => {
		//creating connection
		pool.getConnection((err, con) => {
			if (!err) {
				// query
				selectQuery = "SELECT * FROM " + tableName;
				con.query(selectQuery, (err, row) => {
					// When done with the connection, release it.
					con.release()
					if (!err) {
						//send data to frontend
						res.send(row);
					}
					else {
						//log query error message to server and stop execution
						console.log(' Query Error', err)
						res.end();
					}
				});
			}
			else {
				//log db error message to server and stop execution
				console.log(" Db Error", err);
				res.end();
			}
		})
	},

	// get single Record from table
	monoCategory: (req, res) => {
		//creating connection
		pool.getConnection((err, con) => {
			if (!err) {
				// query
				selectQuery = "SELECT * FROM " + tableName + " where `categoryId`= ?";
				con.query(selectQuery, [req.params.id], (err, row) => {
					// When done with the connection, release it.
					con.release()
					if (!err) {
						//send data to frontend
						res.send(row);
					}
					else {
						//log query error message to server and stop execution
						console.log('getCategory Query Error', err)
						res.end();
					}
				});
			}
			else {
				//log db error message to server and stop execution
				console.log("getCategory Db Error", err);
				res.end();
			}
		})
	},

	// insert Record into table
	addCategory: (req, res) => {
		//creating connection
		pool.getConnection((err, con) => {
			if (!err) {
				parentId = ``
				categoryname = req.body.firstName;
				description = req.body.lastNname;
				metatitle = req.body.password;
				metakeywords = req.body.email;
				metadescription = req.body.phone;
				seourl = req.body.phone;
				displayorder = req.body.phone;
				categoryimage = req.body.phone;
				bannerimageloc = req.body.phone;
				status = req.body.status;
				// query
				inserQuery = "INSERT INTO " + tableName + "(`first_name`, `last_name`, `password`, `email`, `phone`, `status`";
				inserQuery += ")VALUES(";
				inserQuery += " ?,";
				inserQuery += " ?,";
				inserQuery += " ?,";
				inserQuery += " ?,";
				inserQuery += " ?,";
				inserQuery += " ?)";
				con.query(inserQuery, [first_name, last_name, password, email, phone, status], (err, row) => {
					// When done with the connection, release it.
					con.release()
					if (!err) {
						//send data to frontend
						res.send("Date is inserted");
					}
					else {
						//log query error message to server and stop execution
						console.log("addCategory Query Error", err);
						res.end();
					}
				})
			}
			else {
				//log db error message to server and stop execution
				console.log("addCategory DB ERROR", err);
				res.end();
			}

		})
	},

	// delete Record from table
	delCategory: (req, res) => {
		//creating connection
		pool.getConnection((err, con) => {
			if (!err) {
				// query
				deleteQuery = "DELETE FROM " + tableName + " WHERE `categoryId` = " + req.params.id;
				con.query(deleteQuery, (err, row) => {
					// When done with the connection, release it.
					con.release()
					if (!err) {
						//send data to frontend
						res.send("Data deleted successfully");
					}
					else {
						//log query error message to server and stop execution
						console.log("delCategory Query Error ", err);
						res.end();
					}
				})
			}
			else {
				//log db error message to server and stop execution
				console.log("delCategory DB ERROR", err);
				res.end();
			}
		});
	},

	// update a Record in table
	putCategory: (req, res) => {
		//creating connection
		pool.getConnection((err, con) => {
			if (!err) {
				first_name = req.body.firstName;
				last_name = req.body.lastNname;
				password = req.body.password;
				email = req.body.email;
				phone = req.body.phone;
				status = req.body.status;
				id = req.params.id;
				// query
				updateQuery = "UPDATE " + tableName + " SET";
				updateQuery += "`first_name`= ?,";
				updateQuery += "`last_name`= ?,";
				updateQuery += "`password`= ?,";
				updateQuery += "`email`= ?,";
				updateQuery += "`phone`= ?,";
				updateQuery += "`status`= ? ";
				updateQuery += "WHERE `categoryId` = ?";
				con.query(updateQuery, [first_name, last_name, password, email, phone, status, id], (err, row) => {
					// When done with the connection, release it.
					con.release()
					if (!err) {
						//send data to frontend
						res.send("Data Updated successfully");
					}
					else {
						//log query error message to server and stop execution
						console.log("putCategory Query Error ", err);
						res.end();
					}
				})
			}
			else {
				//log db error message to server and stop execution
				console.log("putCategory DB ERROR", err);
				res.end();
			}
		});
	}

}