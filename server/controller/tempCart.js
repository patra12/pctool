var pool = require("../db/db");

module.exports = {
    // insert product id and session id in temp_order table
    addProductId (req, res) {
        const sessionid = req.body.sessionid
        const productId = req.body.productId
        const price = req.body.price

        // query
        let insertQuery = 'INSERT INTO temp_order(sessionid, productId,price) VALUES ';
        insertQuery += "(?,?,?)";
        pool.query(insertQuery, [sessionid, productId, price])
            .then(row => {
                //send data to frontend
                res.send("Data is inserted");
            })
            .catch(err => {
                //log query error message to server and stop execution
                console.log("Query Error", err);
                res.end();
            });
    },
    // for count total and show on add to cart button
    async gettotaldata (req, res) {
        selectQuery = " SELECT count(sessionid) as total, productId, price, sellprice ,size, qty, date, freeship from temp_order where sessionid=  '" + req.params.id + "'";
        pool.query(selectQuery)
            .then(row => {
                res.send(row);
            })
            .catch(err => {
                console.log('getUser Query Error', err)
                res.end();
            });
    },
    // for show on cart page
    async getDataCartpage (req, res) {
        selectQuery = "SELECT * FROM product AS P INNER JOIN temp_order AS T ON P.productId=T.productId where T.sessionid= '" + req.params.id + "'";
        pool.query(selectQuery)
            .then(row => {
                res.send(row);
            })
            .catch(err => {
                console.log('getUser Query Error', err)
                res.end();
            });
    },
    //for delete from cart product
    async delData (req, res) {

        deleteQuery = "DELETE FROM temp_order WHERE tempId = " + req.params.id;
        pool.query(deleteQuery)
            .then(row => {
                res.send("Data deleted");
            })
            .catch(err => {
                console.log("delUser Query Error ", err);
                res.end();
            });
    },
}