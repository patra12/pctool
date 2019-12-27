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
            // .then(row => { return pool.close() })
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

    getImages: (req, res) => {
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
            .then(row => {
                return row.insertId;
            })
            .catch(err => {
                console.log(err)
            });

        pid = insertId;
        imageStatus = req.body.imgstatus;
        is_primary = req.body.imgstatus;

        //inner query
        innerInsertQuery = "INSERT INTO `product_image`(`productId`, "
        innerInsertQuery += "`image_caption`, `imageloc`, `status`, `is_primary`) VALUES ";
        innerInsertQuery += "(?,?,?,?,?)"

        // multiple image upload with normal user permission in linux platform
        // images = req.files.productImage;
        // // path = "/upload/products/" + images;

        // images = req.files.productImage;
        // path = `upload/products/${images}`
        // for (image in images) {
        //     imageName = fpath.parse(images[image].name).name;
        //     imageExt = fpath.parse(images[image].name).ext;
        //     modifiedImageName = imageName + pid + imageExt;

        //     // console.log(modifiedImageName);
        //     //file upload
        //     path = `upload/products/${modifiedImageName}`
        //     images[image].mv(path, err => {
        //         if (err) console.log(`upload error ${err}`);
        //     });


        //     //file permission
        //     await fs.chown(path, 1000, 1000, (err) => {
        //         if (err) {
        //             console.log(`permission error ${err}`)
        //         };
        //     });

        //     // imageName = fpath.parse(images[image].name).name;
        //     // imageExt = fpath.parse(images[image].name).ext;
        //     // modifiedImageName = imageName + pid + imageExt;

        //     // console.log(modifiedImageName);

        //     // insert into db
        //     //inner query
        //     var test = await pool.query(innerInsertQuery, [pid, "caption", modifiedImageName, imageStatus, is_primary], (err, row) => {
        //         if (err) {
        //             console.log(err);
        //         }
        //     })

        // }

        // res.end();

    },


    // delete Record from table
    async delProduct(req, res) {
        deleteQuery = "DELETE p,pi FROM `product` p, `product_image` pi WHERE p.productId =" + req.params.id + " AND pi.productId = " + req.params.id;
        delresponse = await pool.query(deleteQuery)
            .then(row => { return row.affectedRows })
            .catch(err => { console.log(err) });

        if (delresponse) {
            console.log(`${delresponse} Rows are deleted from DB `);
        }

        imageNameQuery = "SELECT imageloc FROM `product_image` WHERE productId = ?";
        images = await pool.query(imageNameQuery, [req.params.id])
            .then(row => { return row })
            .catch(err => { console.log(err) });
        // res.send(req.data);
        // console.log(images.length);
        // res.end();
        for (image in images) {
            pathx = productImg + images[image].imageloc;
            fs.unlink(pathx, (err) => {
                if (err) throw err;
                console.log(pathx + ' was deleted');
            });
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
