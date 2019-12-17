var pool = require("../db")
var tableName = 'product';

module.exports = {
    // get all Record from a table
    getProduct: (req, res) => {
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
    monoProduct: (req, res) => {
        //creating connection
        pool.getConnection((err, con) => {
            if (!err) {
                // query
                selectQuery = "SELECT * FROM " + tableName + " where `productId`= ?";
                con.query(selectQuery, [req.params.id], (err, row) => {
                    // When done with the connection, release it.
                    con.release()
                    if (!err) {
                        //send data to frontend
                        res.send(row);
                    }
                    else {
                        //log query error message to server and stop execution
                        console.log('getProduct Query Error', err)
                        res.end();
                    }
                });
            }
            else {
                //log db error message to server and stop execution
                console.log("getProduct Db Error", err);
                res.end();
            }
        })
    },

    // insert Record into table
    addProduct: (req, res) => {
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


        // query
        inserQuery = "INSERT INTO " + tableName + "(`product_name`, ";
        inserQuery += "`product_code`, `product_desc`, `seourl`, `categoryId`, `ptype`, `price`,";
        inserQuery += "`sellprice`, `availability`, `sellingqnt`, `returnpolicy`, `stonename`,";
        inserQuery += "`plating`, `colorcode`, `collectionname`, `displayorder`, `featureproduct`,";
        inserQuery += " `addedon`, `status`";
        inserQuery += ")VALUES";
        inserQuery += "(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

        pool.query(inserQuery, [product_name, product_code, product_desc, seourl, categoryId, ptype, price, sellprice, availability, sellingqnt, returnpolicy, stonename, plating, colorcode,
            collectionname, displayorder, featureproduct, addedon, status], (err, row) => {

                if (!err) {
                    //send data to frontend
                    res.send("Date is inserted");
                }
                else {
                    //log query error message to server and stop execution
                    console.log("addProduct Query Error", err);
                    res.end();
                }
            })

    },

    // delete Record from table
    delProduct: (req, res) => {
        //creating connection
        pool.getConnection((err, con) => {
            if (!err) {
                // query
                deleteQuery = "DELETE FROM " + tableName + " WHERE productId = " + req.params.id;
                con.query(deleteQuery, (err, row) => {
                    // When done with the connection, release it.
                    con.release()
                    if (!err) {
                        //send data to frontend
                        res.send("Data deleted successfully");
                    }
                    else {
                        //log query error message to server and stop execution
                        console.log("delProduct Query Error ", err);
                        res.end();
                    }
                })
            }
            else {
                //log db error message to server and stop execution
                console.log("delProduct DB ERROR", err);
                res.end();
            }
        });
    },

    // update a Record in table
    putProduct: (req, res) => {
        //creating connection
        pool.getConnection((err, con) => {
            if (!err) {
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
                console.log(req.body);
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
                con.query(updateQuery, [product_name, product_code, product_desc, seourl, categoryId,
                    ptype, price, sellprice, availability, sellingqnt, returnpolicy, stonename, plating, colorcode,
                    collectionname, displayorder, featureproduct, addedon, status, id], (err, row) => {
                        // When done with the connection, release it.
                        con.release()
                        if (!err) {
                            //send data to frontend
                            res.send("Data Updated successfully");
                        }
                        else {
                            //log query error message to server and stop execution
                            console.log("putProduct Query Error ", err);
                            res.end();
                        }
                    })
            }
            else {
                //log db error message to server and stop execution
                console.log("putProduct DB ERROR", err);
                res.end();
            }
        });
    }

}



