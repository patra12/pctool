var pool = require("../db/db")
var tableName = 'category';
var folderLoc = "/upload/categories/"
var fpath = require('path');
var fs = require('fs');
var lib = require('../db/lib');


module.exports = {

	//get any value form catagory table
	// get all Record from a table
	async getCategory(req, res) {

		// query
		selectQuery = "SELECT * FROM " + tableName;
		await pool.query(selectQuery)
			.then(row => {
				res.send(row);
			})
			.catch(err => {
				console.log(' Query Error', err)
				res.end();
			})
	},

	// get all Category name from category table
	async getCategoryNames(req, res) {
		// query
		selectQuery = "SELECT `categoryname` FROM " + tableName;
		await pool.query(selectQuery)
			.then(row => {
				var categoryArray = [];
				for (var i in row) {
					categoryArray.push(row[i].categoryname);
				}
				res.send(categoryArray);
			})
			.catch(err => {
				console.log(' Query Error', err)
				res.end();
			});
	},

	// get single Categoryid agianest category name
	async getCategoryId(req, res) {
		// query
		categoryname = req.body.categoryname;
		selectQuery = "SELECT `categoryId` FROM " + tableName + " where `categoryname`= ?";
		await pool.query(selectQuery, [categoryname])
			.then(row => {
				res.json(row[0].categoryId);
			})
			.catch(err => {
				console.log('getCategory Query Error', err)
				res.end();
			});
	},

	// get single Record from table
	async monoCategory(req, res) {
		// query
		selectQuery = "SELECT * FROM " + tableName + " where `categoryId`= ?";
		await pool.query(selectQuery, [req.params.id])
			.then(row => {
				res.send(row);
			})
			.catch(err => {
				console.log('getCategory Query Error', err)
				res.end();
			})

	},



	// insert Record into table
	async addCategory(req, res) {
		parentId = '1';
		categoryname = req.body.categoryname;
		description = req.body.description;
		metatitle = req.body.metatitle;
		metakeywords = req.body.metakeywords;
		metadescription = req.body.metadescription;
		seourl = req.body.seourl;
		displayorder = req.body.displayorder;

		bannerimageloc = req.body.bannerimageloc;
		status = req.body.status;
		console.log();

		//image data for upload
		image = req.files.categoryimage;

		//spleating image for adding timestamp 
		pathx = fpath.parse(image.name);

		//getting date for timestamp
		d = new Date().valueOf()

		//making time stamp image
		modifiedFie = pathx.name + d + pathx.ext;

		//path where image will upload
		path = `upload/categories/${modifiedFie}`

		//moving file to disk
		image.mv(path)
			.then(resolve => {
				fs.chownSync(path, 1000, 1000);
			})
			.catch(err => {
				console.log(err);
			});

		//query
		inserQuery = "INSERT INTO " + tableName + "(`parentId`, `categoryname`,";
		inserQuery += "`description`, `metatitle`, `metakeywords`, `metadescription`, ";
		inserQuery += "`seourl`, `displayorder`,`categoryimage`, `bannerimageloc`, `status`)";
		inserQuery += "VALUES( ?,?,?,?,?,?,?,?,?,?,?)";
		await pool.query(inserQuery, [parentId, categoryname, description, metatitle,
			metakeywords, metadescription, seourl, displayorder, modifiedFie, bannerimageloc, status])
			.then(row => {
				res.send("Date is inserted");
			})
			.catch(err => {
				console.log("addCategory Query Error", err);
				res.end();
			});

	},




	// delete Record from table
	async delCategory(req, res) {

		//selectquery
		queryx = `SELECT categoryimage FROM  category WHERE categoryId = ${req.params.id}`;
		console.log(queryx);
		await pool.query(queryx)
			.then(row => {
				console.log(row[0].categoryimage);
				path = `upload/categories/${row[0].categoryimage}`
				fs.unlink(path, (err) => {
					if (err) throw err;
					console.log(path + ' was deleted');
				});
			})
			.catch(err => {
				console.log(err)
			});

		//deletequery
		deleteQuery = "DELETE FROM " + tableName + " WHERE `categoryId` = " + req.params.id;
		await pool.query(deleteQuery)
			.then(row => {
				res.send(`data deleted`);
			})
			.catch(err => {
				console.log("delCategory Query Error ", err);
				res.end();
			})
	},

	// update a Record in table
	async putCategory(req, res) {
		if (req.files == null) {
			parentId = "1";
			categoryname = req.body.categoryname;
			description = req.body.description;
			metatitle = req.body.metatitle;
			metakeywords = req.body.metakeywords;
			metadescription = req.body.metadescription;
			seourl = req.body.seourl;
			displayorder = req.body.displayorder;
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
			updateQuery += "`bannerimageloc`= ?, ";
			updateQuery += "`status`= ? ";
			updateQuery += "WHERE `categoryId` = ?";
			await pool.query(updateQuery, [categoryname, description, metatitle, metakeywords,
				metadescription, seourl, displayorder, bannerimageloc, status, id])
				.then(row => {
					res.send("Data Updated successfully");
				})
				.catch(err => {
					console.log("putCategory Query Error ", err);
					res.end();
				});
		}
		else {

			queryx = `SELECT categoryimage FROM  category WHERE categoryId = ${req.params.id}`;
			console.log(queryx);
			await pool.query(queryx)
				.then(row => {
					path = `upload/categories/${row[0].categoryimage}`
					fs.unlink(path, (err) => {
						if (err) throw err;
					});
				})
				.catch(err => {
					console.log(err)
				});

			parentId = "1";
			categoryname = req.body.categoryname;
			description = req.body.description;
			metatitle = req.body.metatitle;
			metakeywords = req.body.metakeywords;
			metadescription = req.body.metadescription;
			seourl = req.body.seourl;
			displayorder = req.body.displayorder;
			bannerimageloc = req.body.bannerimageloc;
			status = req.body.status;
			id = req.params.id


			//image data for upload
			image = req.files.categoryimage;

			//spleating image for adding timestamp 
			pathx = fpath.parse(image.name);

			//getting date for timestamp
			d = new Date().valueOf()

			//making time stamp image
			modifiedFie = pathx.name + d + pathx.ext;

			//path where image will upload
			path = `upload/categories/${modifiedFie}`

			//moving file to disk
			image.mv(path)
				.then(resolve => {
					fs.chownSync(path, 1000, 1000);
				})
				.catch(err => {
					console.log(err);
				});



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
			await pool.query(updateQuery, [categoryname, description, metatitle, metakeywords,
				metadescription, seourl, displayorder, modifiedFie, bannerimageloc, status, id])
				.then(row => {
					res.send("Data Updated successfully");
				})
				.catch(err => {
					console.log("putCategory Query Error ", err);
					res.end();
				});
		}
		res.end();

	}

}