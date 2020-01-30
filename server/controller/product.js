var pool = require("../db/db")
var tableName = 'product';
const fs = require('fs');
const fpath = require('path');
const product_image_location_on_disk = "upload/products/"


module.exports = {
    // get all Record from a table
    async getProduct(req, res) {
        // query
        selectQuery = "SELECT * FROM " + tableName;
        req.data = await pool.query(selectQuery)
            .then(row => { return row })
            .catch(err => { console.log(err) });
        res.send(req.data);
    },

    // get single Record from table
    async monoProduct(req, res) {
        // query
        selectQuery = "SELECT * FROM " + tableName + " where `productId`= ?";
        await pool.query(selectQuery, [req.params.id])
            .then(row => { res.send(row) })
            .catch(err => { console.log(err) });
    },


    getImageStatus: (req, res) => {
        // query
        selectQuery = `SELECT distinct(status) FROM  \`product_image\`  where productId= ?`;
        // console.log(selectQuery);
        pool.query(selectQuery, [req.params.id])
            .then(row => {
                res.send(row);
            })
            .catch(row => {
                console.log('getProduct Query Error', err)
                res.end();
            })
    },
    getImages: (req, res) => {
        // query
        selectQuery = `SELECT * FROM  \`product_image\`  where productId = ?`;
        pool.query(selectQuery, [req.params.id])
            .then(row => {
                res.send(row);
            })
            .catch(row => {
                console.log('getProduct Query Error', err)
                res.end();
            })
    },

    /**
     * insert Record into table
     * insert record to product table but this table has relation hence 
     * in this function there is inner query present 
     */
    async addProduct(req, res) {
        product_name = req.body.product_name;
        product_code = req.body.product_code;
        product_desc = req.body.product_desc;
        seourl = req.body.seourl;
        categoryId = req.body.categoryId;
        //ptype = req.body.ptype;
        price = req.body.price;
        sellprice = req.body.sellprice;
        availability = req.body.availability;
        //sellingqnt = req.body.sellingqnt;
        //returnpolicy = req.body.returnpolicy;
        //stonename = req.body.stonename;
        //plating = req.body.plating;
        //colorcode = req.body.colorcode;
        //collectionname = req.body.collectionname;
        //displayorder = req.body.displayorder;
        featureproduct = req.body.featureproduct;
        status = req.body.status;
        //imageStatus = req.body.imgstatus;
        is_primary = req.body.imgstatus;

        //outer query    ///`ptype`,`sellingqnt`,`returnpolicy`, `stonename`,plating`, `colorcode`, `collectionname`, `displayorder`, 
        inserQuery = "INSERT INTO " + tableName + "(`product_name`, ";
        inserQuery += "`product_code`, `product_desc`, `seourl`, `categoryId`,  `price`,";
        inserQuery += "`sellprice`, `availability`,";
        inserQuery += "``featureproduct`,";
        inserQuery += " `status`)";
        inserQuery += "VALUES";
        inserQuery += "(?,?,?,?,?,?,?,?,?,?,?)";//,?,?,?,?,?,?,?

        //outer query executiion
        insertId = await pool.query(inserQuery, [product_name, product_code, product_desc, seourl, categoryId,
             price, sellprice, availability,featureproduct,status])
            //ptype,sellingqnt, returnpolicy, stonename,plating, colorcode, collectionname, displayorder,
            .then(async row => {
                // console.log(req.files);
                //if image is not send form frontend then images will not upload
                if (req.files != null) {
                    pid = row.insertId;
                    // console.log();
                    //inner query
                    innerInsertQuery = "INSERT INTO `product_image`(`productId`, "
                    innerInsertQuery += "`image_caption`, `imageloc`, `status`, `is_primary`) VALUES ";
                    innerInsertQuery += "(?,?,?,?,?)"

                    // multiple image upload with normal user permission in linux platform
                    product_images = req.files.productImage;

                    //getting date for timestamp
                    time_stamp = new Date().valueOf()

                    //all Images
                    product_images = req.files.productImage;

                    for (image in product_images) {

                        //spleating image for adding timestamp 
                        imageParsed = fpath.parse(product_images[image].name);

                        //making time stamp image
                        modifiedImageName = imageParsed.name + time_stamp + imageParsed.ext;


                        // console.log(modifiedImageName);
                        //file upload
                        path = `upload/products/${modifiedImageName}`
                 comented out in html and js       product_images[image].mv(path)
                            .then(async resolve => {
                                await fs.chownSync(path, 1000, 1000);
                            })
                            .catch(err => {
                                console.log(err);
                            });

                        //inner query
                        await pool.query(innerInsertQuery, [pid, imageParsed.name, modifiedImageName, imageStatus, is_primary], (err, row) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                res.send(`data inserted`);
                            }
                        })
                    }
                }
            })
            .catch(err => {
                console.log(err)
            });

        res.end();

    },



    // delete Record from table
    async delProduct(req, res) {

        //searching image into db
        imageNameQuery = "SELECT imageloc FROM `product_image` WHERE productId = ?";
        images_delete_form_disk = await pool.query(imageNameQuery, [req.params.id])
            .then(row => { return row })
            .catch(err => { console.log(err) });


        //if we get images then delete it
        if (images_delete_form_disk.length != 0) {
            for (image in images_delete_form_disk) {
                image_location_for_delete = product_image_location_on_disk + images_delete_form_disk[image].imageloc;
                fs.unlink(image_location_for_delete, (err) => {
                    if (err) throw err;
                    console.log(image_location_for_delete + ' was deleted');
                });
            }
            deleteQuery = "DELETE p,pi FROM `product` p, `product_image` pi WHERE p.productId =" + req.params.id + " AND pi.productId = " + req.params.id;
            await pool.query(deleteQuery)
                .then(row => {
                    res.send(`${row.affectedRows} Rows are deleted from DB `)
                })
                .catch(err => { console.log(err) });
        }
        else {
            deleteQuery = "DELETE FROM `product` WHERE productId =" + req.params.id;
            await pool.query(deleteQuery)
                .then(row => {
                    res.send(`${row.affectedRows} Rows are deleted from DB `);
                })
                .catch(err => { console.log(err) });
        }
    },

    // update a Record in table
    async putProduct(req, res) {

        product_name = req.body.product_name;
        product_code = req.body.product_code;
        product_desc = req.body.product_desc;
        seourl = req.body.seourl;
        categoryId = req.body.categoryId;
        // ptype = req.body.ptype;
        price = req.body.price;
        sellprice = req.body.sellprice;
        availability = req.body.availability;
        // sellingqnt = req.body.sellingqnt;
        // returnpolicy = req.body.returnpolicy;
        // stonename = req.body.stonename;
        // plating = req.body.plating;
        // colorcode = req.body.colorcode;
        // collectionname = req.body.collectionname;
        // displayorder = req.body.displayorder;
        featureproduct = req.body.featureproduct;
        addedon = req.body.addedon;
        status = req.body.status;
        id = req.params.id;
        imageStatus = req.body.imgstatus;
        is_primary = req.body.imgstatus;
        //data veariables for image
        pid = req.params.id;

        // console.log(req.body);
        // query
        updateQuery = "UPDATE " + tableName + " SET";
        updateQuery += "`product_name`= ?,";
        updateQuery += "`product_code`= ?,";
        updateQuery += "`product_desc`= ?,";
        updateQuery += "`seourl`= ?,";
        updateQuery += "`categoryId`= ?,";
        // updateQuery += "`ptype`= ?,";
        updateQuery += "`price`= ?,";
        updateQuery += "`sellprice`= ?,";
        updateQuery += "`availability`= ?,";
        // updateQuery += "`sellingqnt`= ?,";
        // updateQuery += "`returnpolicy`= ?,";
        // updateQuery += "`stonename`= ?,";
        // updateQuery += "`plating`= ?,";
        // updateQuery += "`colorcode`= ?,";
        // updateQuery += "`collectionname`= ?,";
        // updateQuery += "`displayorder`= ?,";
        updateQuery += "`featureproduct`= ?,";
        updateQuery += "`addedon`= ?,";
        updateQuery += "`status`= ? ";
        updateQuery += "WHERE `ProductId` = ?";

        // selecting that image is prestent in server 
        selectQuery = `SELECT * FROM  \`product_image\`  where productId = ?`;
        images_from_db = await pool.query(selectQuery, [req.params.id])
            .then(row => { return row; })
            .catch(err => { console.log(err); res.end(); })




        //Options for image upload
        // multiple image upload with normal user permission in linux platform
        // images = req.files.productImage ? req.files.productImage : null;

        //getting date for timestamp
        time_stamp = new Date().valueOf()

        //all Images
        product_images = (req.files == null) ? 0 : req.files.productImage;

        path = `upload/products/${product_images}`;


        // console.log(req.files.productImage.length);
        // console.log(images_from_db.length > 0);
        //if image is send form frontend then we update image or insert image
        if (product_images.length > 0) {
            if (images_from_db.length > 0) {

                //searching image into db
                imageNameQuery = "SELECT imageloc FROM `product_image` WHERE productId = ?";
                images_delete_form_disk = await pool.query(imageNameQuery, [req.params.id])
                    .then(row => { return row })
                    .catch(err => { console.log(err) });


                //if we get images then delete it
                if (images_delete_form_disk.length != 0) {
                    for (image in images_delete_form_disk) {
                        image_location_for_delete = product_image_location_on_disk + images_delete_form_disk[image].imageloc;
                        fs.unlink(image_location_for_delete, (err) => {
                            if (err) throw err;
                            console.log(image_location_for_delete + ' was deleted');
                        });
                    }
                    deleteQuery = "DELETE  FROM `product_image` WHERE productId =" + req.params.id;
                    await pool.query(deleteQuery)
                        .then(row => {
                            res.send(`${row.affectedRows} Rows are deleted from DB `)
                        })
                        .catch(err => { console.log(err) });
                }

                //inner query
                innerInsertQuery = "INSERT INTO `product_image`(`productId`, "
                innerInsertQuery += "`image_caption`, `imageloc`, `status`, `is_primary`) VALUES ";
                innerInsertQuery += "(?,?,?,?,?)"


                for (image in product_images) {
                    //spliting image for adding timestamp 
                    imageParsed = fpath.parse(product_images[image].name);

                    //making time stamp image
                    modifiedImageName = imageParsed.name + time_stamp + imageParsed.ext;


                    // console.log(modifiedImageName);
                    //file upload
                    path = `upload/products/${modifiedImageName}`
                    product_images[image].mv(path)
                        .then(async resolve => {
                            await fs.chownSync(path, 1000, 1000);
                        })
                        .catch(err => {
                            console.log(err);
                        });

                    //inner query
                    await pool.query(innerInsertQuery, [pid, imageParsed.name, modifiedImageName, imageStatus, is_primary])
                        .then(row => {
                            console.log('data inserted');
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            }
            else {
                console.log("insert");

                //inner query
                innerInsertQuery = "INSERT INTO `product_image`(`productId`, "
                innerInsertQuery += "`image_caption`, `imageloc`, `status`, `is_primary`) VALUES ";
                innerInsertQuery += "(?,?,?,?,?)"


                for (image in product_images) {
                    //spliting image for adding timestamp 
                    imageParsed = fpath.parse(product_images[image].name);

                    //making time stamp image
                    modifiedImageName = imageParsed.name + time_stamp + imageParsed.ext;


                    // console.log(modifiedImageName);
                    //file upload
                    path = `upload/products/${modifiedImageName}`
                    product_images[image].mv(path)
                        .then(async resolve => {
                            await fs.chownSync(path, 1000, 1000);
                        })
                        .catch(err => {
                            console.log(err);
                        });

                    //inner query
                    await pool.query(innerInsertQuery, [pid, imageParsed.name, modifiedImageName, imageStatus, is_primary])
                        .then(row => {
                            console.log('data inserted');
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            }

        }



        console.log("normal update in product table");
        res.end();
        await pool.query(updateQuery, [product_name, product_code, product_desc, seourl, categoryId,
            ptype, price, sellprice, availability, sellingqnt, returnpolicy, stonename, plating, colorcode,
            collectionname, displayorder, featureproduct, addedon, status, id])
            .then(row => {
                // res.send("Data Updated successfully");
            })
            .catch(err => {
                console.log("putProduct DB ERROR", err);
                res.end();
            })


    }
}
