var pool = require("../db/db")
var tableName = 'product';
const fs = require('fs');
const fpath = require('path');
const productImg = "upload/products/"


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
            // .then(row => { return pool.close() })
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
        selectQuery = `SELECT * FROM  \`product_image\`  where productId= ?`;
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

    // insert Record into table
    /**
     * insert record to product table but this table has relation hence 
     * in this function there is inner query present 
     */
    async addProduct(req, res) {
        product_name = req.body.product_name;
        product_code = req.body.product_code;
        product_desc = req.body.product_desc;
        seourl = req.body.seourl;
        categoryId = req.body.categoryId;
        ptype = req.body.ptype;
        price = req.body.price;
        sellprice = req.body.sellprice;
        availability = req.body.availability;
        sellingqnt = req.body.sellingqnt;
        returnpolicy = req.body.returnpolicy;
        stonename = req.body.stonename;
        plating = req.body.plating;
        colorcode = req.body.colorcode;
        collectionname = req.body.collectionname;
        displayorder = req.body.displayorder;
        featureproduct = req.body.featureproduct;
        status = req.body.status;

        //outer query
        inserQuery = "INSERT INTO " + tableName + "(`product_name`, ";
        inserQuery += "`product_code`, `product_desc`, `seourl`, `categoryId`, `ptype`, `price`,";
        inserQuery += "`sellprice`, `availability`, `sellingqnt`, `returnpolicy`, `stonename`,";
        inserQuery += "`plating`, `colorcode`, `collectionname`, `displayorder`, `featureproduct`,";
        inserQuery += " `status`)";
        inserQuery += "VALUES";
        inserQuery += "(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

        //outer query executiion
        insertId = await pool.query(inserQuery, [product_name, product_code, product_desc, seourl, categoryId,
            ptype, price, sellprice, availability, sellingqnt, returnpolicy, stonename,
            plating, colorcode, collectionname, displayorder, featureproduct,
            status])
            .then(async row => {
                if (req.files != null) {
                    pid = row.insertId;
                    imageStatus = req.body.imgstatus;
                    is_primary = req.body.imgstatus;

                    //inner query
                    innerInsertQuery = "INSERT INTO `product_image`(`productId`, "
                    innerInsertQuery += "`image_caption`, `imageloc`, `status`, `is_primary`) VALUES ";
                    innerInsertQuery += "(?,?,?,?,?)"

                    // multiple image upload with normal user permission in linux platform
                    images = req.files.productImage;

                    //getting date for timestamp
                    time_stamp = new Date().valueOf()

                    images = req.files.productImage;
                    path = `upload/products/${images}`
                    for (image in images) {
                        //spleating image for adding timestamp 
                        imageParsed = fpath.parse(images[image].name);

                        //making time stamp image
                        modifiedImageName = imageParsed.name + time_stamp + imageParsed.ext;


                        // console.log(modifiedImageName);
                        //file upload
                        path = `upload/products/${modifiedImageName}`
                        images[image].mv(path)
                            .then(async resolve => {
                                await fs.chownSync(path, 1000, 1000);
                            })
                            .catch(err => {
                                console.log(err);
                            });

                        //inner query
                        await pool.query(innerInsertQuery, [pid, "caption", modifiedImageName, imageStatus, is_primary], (err, row) => {
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

    read_images(req, res) {
        image_names_from_frontend = req.body;

        // for (image_name in image_names_from_frontend.length) {
        //     image_path_on_server = `upload/products/${image_names_from_frontend[image_name]}`;
        //     fs.readFile(image_path_on_server, (err, data) => {
        //         res.send(data);
        //     });
        // }
        console.log(image_names_from_frontend);
        res.send(image_names_from_frontend);

    },

    // delete Record from table
    async delProduct(req, res) {

        //searching image into db
        imageNameQuery = "SELECT imageloc FROM `product_image` WHERE productId = ?";
        images = await pool.query(imageNameQuery, [req.params.id])
            .then(row => { return row })
            .catch(err => { console.log(err) });


        console.log(images.length);
        //if we get images then delete it
        if (images.length != 0) {
            for (image in images) {
                pathx = productImg + images[image].imageloc;
                fs.unlink(pathx, (err) => {
                    if (err) throw err;
                    console.log(pathx + ' was deleted');
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
        ptype = req.body.ptype;
        price = req.body.price;
        sellprice = req.body.sellprice;
        availability = req.body.availability;
        sellingqnt = req.body.sellingqnt;
        returnpolicy = req.body.returnpolicy;
        stonename = req.body.stonename;
        plating = req.body.plating;
        colorcode = req.body.colorcode;
        collectionname = req.body.collectionname;
        displayorder = req.body.displayorder;
        featureproduct = req.body.featureproduct;
        addedon = req.body.addedon;
        status = req.body.status;
        id = req.params.id;


        // console.log(req.body);
        // query
        updateQuery = "UPDATE " + tableName + " SET";
        updateQuery += "`product_name`= ?,";
        updateQuery += "`product_code`= ?,";
        updateQuery += "`product_desc`= ?,";
        updateQuery += "`seourl`= ?,";
        updateQuery += "`categoryId`= ?,";
        updateQuery += "`ptype`= ?,";
        updateQuery += "`price`= ?,";
        updateQuery += "`sellprice`= ?,";
        updateQuery += "`availability`= ?,";
        updateQuery += "`sellingqnt`= ?,";
        updateQuery += "`returnpolicy`= ?,";
        updateQuery += "`stonename`= ?,";
        updateQuery += "`plating`= ?,";
        updateQuery += "`colorcode`= ?,";
        updateQuery += "`collectionname`= ?,";
        updateQuery += "`displayorder`= ?,";
        updateQuery += "`featureproduct`= ?,";
        updateQuery += "`addedon`= ?,";
        updateQuery += "`status`= ? ";
        updateQuery += "WHERE `ProductId` = ?";
        await pool.query(updateQuery, [product_name, product_code, product_desc, seourl, categoryId,
            ptype, price, sellprice, availability, sellingqnt, returnpolicy, stonename, plating, colorcode,
            collectionname, displayorder, featureproduct, addedon, status, id])
            .then(row => {
                res.send("Data Updated successfully");
            })
            .catch(err => {
                console.log("putProduct DB ERROR", err);
                res.end();
            })
        //      (err, row) => {
        //         if (!err) {
        //             //send data to frontend
        //             res.send("Data Updated successfully");
        //         }
        //         else {
        //             //log query error message to server and stop execution
        //             // that was passed to callDirectorySearch
        //             cb(response.statusCode);
        //             //log db error message to server and stop execution
        //             console.log("putProduct DB ERROR", err);
        //             res.end();
        //         }
        //     }
        // );
        //     }

        // });


    }
}
