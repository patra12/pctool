var pool = require("../db")
var tableName = 'category';
var folderLoc = "/upload/categories/"



module.exports = {
	//get any value form catagory table
	// get all Record from a table
	getCategory: (req, res) => {

		// query
		selectQuery = "SELECT * FROM " + tableName;
		pool.query(selectQuery, (err, row) => {
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
	},

	// get single Record from table
	monoCategory: (req, res) => {
		// query
		selectQuery = "SELECT * FROM " + tableName + " where `categoryId`= ?";
		pool.query(selectQuery, [req.params.id], (err, row) => {
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

	},

	// insert Record into table
	addCategory: (req, res) => {
		parentId = req.body.parentId;
		categoryname = req.body.categoryName;
		description = req.body.description;
		metatitle = req.body.metaTitle;
		metakeywords = req.body.metaKeywords;
		metadescription = req.body.metaDescription;
		seourl = req.body.seoUrl;
		displayorder = req.body.displayOrder;
		categoryimage = req.file.originalname;
		bannerimageloc = req.body.bannerimageloc;
		status = req.body.status;
		console.log(categoryimage);
		// res.send(categoryimage);
		// query
		inserQuery = "INSERT INTO " + tableName + "(`parentId`, `categoryname`,";
		inserQuery += "`description`, `metatitle`, `metakeywords`, `metadescription`, ";
		inserQuery += "`seourl`, `displayorder`,`categoryimage`, `bannerimageloc`, `status`)";
		inserQuery += "VALUES( ?,?,?,?,?,?,?,?,?,?,?)";
		pool.query(inserQuery, [parentId, categoryname, description, metatitle,
			metakeywords, metadescription, seourl, displayorder, categoryimage, bannerimageloc, status], (err, row) => {
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

	},


	// delete Record from table
	delCategory: (req, res) => {


		// var log = function getCol(col = String, table = String, idcol = String, id) {
		// 	selectQuery = "SELECT " + col + " FROM `" + table + "` WHERE `" + idcol + "`=" + id;
		// 	pool.query(selectQuery, (err, row) => {
		// 		if (!err) {
		// 			// return row
		// 			return row[0].categoryimage;
		// 		}
		// 	});
		// }
		// // console.log(req.params.id);
		// console.log(log);
		// res.end();

		// query
		deleteQuery = "DELETE FROM " + tableName + " WHERE `categoryId` = " + req.params.id;
		pool.query(deleteQuery, (err, row) => {
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
	},

	// update a Record in table
	putCategory: (req, res) => {
		//creating connection
		pool.getConnection((err, con) => {
			if (!err) {
				parentId = req.body.parentId;
				categoryname = req.body.categoryName;
				description = req.body.description;
				metatitle = req.body.metaTitle;
				metakeywords = req.body.metaKeywords;
				metadescription = req.body.metaDescription;
				seourl = req.body.seoUrl;
				displayorder = req.body.displayOrder;
				categoryimage = req.file.originalname;
				bannerimageloc = req.body.bannerimageloc;
				status = req.body.status;
				id = req.params.id
				// query
				updateQuery = "UPDATE " + tableName + " SET";
				updateQuery += "`categoryname`= ?,";
				updateQuery += "`description`= ?,";
				updateQuery += "`metatitle`= ?,";
				updateQuery += "`metakeywords`= ?,";
				updateQuery += "`metadescription`= ?,";
				updateQuery += "`seourl`= ?, ";
				updateQuery += "`displayorder`= ?, ";
				updateQuery += "`categoryimage`= ?, ";
				updateQuery += "`bannerimageloc`= ?, ";
				updateQuery += "`status`= ? ";
				updateQuery += "WHERE `categoryId` = ?";
				con.query(updateQuery, [categoryname, description, metatitle, metakeywords,
					metadescription, seourl, displayorder, categoryimage, bannerimageloc, status, id], (err, row) => {
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