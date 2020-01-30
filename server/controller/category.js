var pool = require("../db/db")
var fpath = require('path');
var fs = require('fs');
var tableName = 'category';


// Getting Date for Timestamp
ImageTimestamp = new Date().valueOf();

module.exports = {

	//get any value form catagory table
	// get all Record from a table
	async getCategory(req, res) {

		// query
		selectQuery = "SELECT * FROM " + tableName;

		//execution of the query
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

		//execution of the query
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

		//execution of the query
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

		//execution of the query
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

		//Data for updation
		parentId = '1';
		categoryname = req.body.categoryname;
		description = req.body.description;
		metatitle = req.body.metatitle;
		metakeywords = req.body.metakeywords;
		metadescription = req.body.metadescription;
		seourl = req.body.seourl;
		status = req.body.status;

		//checking and setting veariable to based on image is presenmt or not
		category_images = (req.files == null) ? 0 : req.files.categoryimage;

		//Creating insert query in category based on image is passed from fontend or not
		inserCategoryQuery = "INSERT INTO " + tableName + "(`parentId`, `categoryname`,";
		inserCategoryQuery += "`description`, `metatitle`, `metakeywords`, `metadescription`, ";
		inserCategoryQuery += "`seourl`,";
		inserCategoryQuery += category_images ? " `categoryimage`, " : "";
		inserCategoryQuery += " `status`)";
		inserCategoryQuery += "VALUES( ?,?,?,?,?,?,?,?"; //,?,?
		inserCategoryQuery += category_images ? ",?" : "";
		inserCategoryQuery += ")";


		//if we get image then initiate file process
		if (category_images) {

			//spleating image for adding timestamp 
			splitted_path = fpath.parse(category_images.name);

			//making time stamp image
			modifiedFie = splitted_path.name + ImageTimestamp + splitted_path.ext;

			//path where image will upload
			path = `upload/categories/${modifiedFie}`

			/**
			 * @param path Takes a file path to move the file to that folder
			 */
			category_images.mv(path)
				.then(resolve => {
					fs.chownSync(path, 1000, 1000);
				})
				.catch(err => {
					console.log(err);
				});

			//execution of the query
			await pool.query(inserCategoryQuery, [parentId, categoryname, description, metatitle,
				metakeywords, metadescription, seourl, modifiedFie, status])
				.then(row => {
					res.send("Date is inserted");
				})
				.catch(err => {
					console.log("addCategory Query Error", err);
					res.end();
				});
		}
		//when we do not get image
		else {
			//execution of the query
			await pool.query(inserCategoryQuery, [parentId, categoryname, description, metatitle,
				metakeywords, metadescription, seourl, status])//displayorder, bannerimageloc,
				.then(row => {
					res.send("Date is inserted");
				})
				.catch(err => {
					console.log("addCategory Query Error", err);
					res.end();
				});
		}
	},

	/**
	 * delete Record from table bsed on image is persent or not
	 * @param {string,json,any} req accept values sendend from user
	 * or frontend.
	 * @param {json,string,any} res send the response after proccess is compleate
	 */
	async delCategory(req, res) {
		/**
		 * Getting the image name from db.
		 * if got the image then delete the image first
		 * the delete the data from db.
		 * if not get any image then only db record is deleted;
		 */

		//selecting the image name from db
		deleteCategory = `SELECT categoryimage FROM  category WHERE categoryId = ${req.params.id}`;

		//execution of the query
		category_image_in_db = await pool.query(deleteCategory)
			.then(row => {
				return row[0].categoryimage;
			})
			.catch(err => {
				console.log(err)
			});

		// if getting the image from db means image is also present in disk 
		// then deleting the image			
		if (category_image_in_db) {
			path = `upload/categories/${category_image_in_db}`
			fs.unlink(path, (err) => {
				if (err) throw err;
				console.log(path + ' was deleted');
			});
		}

		// Delete db record if image is present or not
		deleteQuery = "DELETE FROM " + tableName + " WHERE `categoryId` = " + req.params.id;

		//execution of the query
		await pool.query(deleteQuery)
			.then(row => {
				res.send(`data deleted`);
			})
			.catch(err => {
				console.log("delCategory Query Error ", err);
				res.end();
			})
	},

	/**
	 * update record depending upon image is present or not
	 * @param {*} req accept values sendend from user
	 * or frontend.
	 * @param {*} res send the response after proccess is compleate
	 */
	async putCategory(req, res) {

		//if image is not get then update without deleting and moving image
		if (req.files == null) {

			//Getting values for update category
			parentId = "1";
			categoryname = req.body.categoryname;
			description = req.body.description;
			metatitle = req.body.metatitle;
			metakeywords = req.body.metakeywords;
			metadescription = req.body.metadescription;
			seourl = req.body.seourl;
			//displayorder = req.body.displayorder;
			//bannerimageloc = req.body.bannerimageloc;
			status = req.body.status;
			id = req.params.id

			// update query in category without image
			updateQuery = "UPDATE " + tableName + " SET";
			updateQuery += "`categoryname`= ?,";
			updateQuery += "`description`= ?,";
			updateQuery += "`metatitle`= ?,";
			updateQuery += "`metakeywords`= ?,";
			updateQuery += "`metadescription`= ?,";
			updateQuery += "`seourl`= ?, ";
			//updateQuery += "`displayorder`= ?, ";
			//updateQuery += "`bannerimageloc`= ?, ";
			updateQuery += "`status`= ? ";
			updateQuery += "WHERE `categoryId` = ?";

			//execution of the query
			await pool.query(updateQuery, [categoryname, description, metatitle, metakeywords,
				metadescription, seourl, status, id])//displayorder, bannerimageloc,
				.then(row => {
					res.send("Data Updated successfully");
				})
				.catch(err => {
					console.log("putCategory Query Error ", err);
					res.end();
				});
		}
		else {

			/**
			 * if getting get category image form db. 
			 * then first removing it from disk,
			 * and then update new image name to db.
			 * then move the new image to disk.
			 */

			//query
			category_image_in_db = `SELECT categoryimage FROM  category WHERE categoryId = ${req.params.id}`;

			//execution of the query
			image_got = await pool.query(category_image_in_db)
				.then(row => {
					return row[0].categoryimage;
				})
				.catch(err => {
					console.log(err)
				});
			if (image_got) {
				//Deleting image from disk after selecting the image
				path = `upload/categories/${image_got}`
				fs.unlink(path, (err) => {
					if (err) throw err;
				});
			}

			//Getting values for update category data along with image
			parentId = "1";
			categoryname = req.body.categoryname;
			description = req.body.description;
			metatitle = req.body.metatitle;
			metakeywords = req.body.metakeywords;
			metadescription = req.body.metadescription;
			seourl = req.body.seourl;
			//displayorder = req.body.displayorder;
			//bannerimageloc = req.body.bannerimageloc;
			status = req.body.status;
			id = req.params.id


			//image data for upload
			image = req.files.categoryimage;

			//spleating image for adding timestamp 
			splitted_path = fpath.parse(image.name);

			//making image name with time stamp
			modifiedFie = splitted_path.name + ImageTimestamp + splitted_path.ext;

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

			// update query with image name replacement
			updateQuery = "UPDATE " + tableName + " SET";
			updateQuery += "`categoryname`= ?,";
			updateQuery += "`description`= ?,";
			updateQuery += "`metatitle`= ?,";
			updateQuery += "`metakeywords`= ?,";
			updateQuery += "`metadescription`= ?,";
			updateQuery += "`seourl`= ?, ";
			//updateQuery += "`displayorder`= ?, ";
			updateQuery += "`categoryimage`= ?, ";
			//updateQuery += "`bannerimageloc`= ?, ";
			updateQuery += "`status`= ? ";
			updateQuery += "WHERE `categoryId` = ?";

			//execution of the query
			await pool.query(updateQuery, [categoryname, description, metatitle, metakeywords,
				metadescription, seourl, modifiedFie, status, id])// bannerimageloc,displayorder,
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