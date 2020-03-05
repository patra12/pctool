var pool = require("../db/db");

module.exports = {
    // insert product id and session id in temp_order table
    async addProductId (req, res) {
        const sessionid = req.body.sessionid
        const productId = req.body.productId
        const price = req.body.price
        const quantity = req.body.quantity

        // query
        var insertQuery = 'INSERT INTO temp_order(sessionid,';
        insertQuery += ' productId,price,qty) VALUES ';
        insertQuery += "(?,?,?,?)";

        lastRowId = await pool.query(insertQuery, [sessionid, productId, price, quantity])
            .then(row => {
                return row.insertId;
            })
            .catch(err => {
                return ("Query Error")
            });

        getrow = "select * from temp_order where tempId = ?";
        lastRow = await pool.query(getrow, [lastRowId]).then(res => {
            return res[0];
        })
        res.json(lastRow);
    },

    // for count total and show on add to cart button
    async getTempDataBySession (req, res) {

        let selectQuery = " SELECT * from temp_order where sessionid = ?";

        pool.query(selectQuery, [req.params.id])
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

        selectQuery = "SELECT * FROM product AS P INNER JOIN ";
        selectQuery += "temp_order AS T ON P.productId=T.productId";
        selectQuery += " where T.sessionid= ?";

        pool.query(selectQuery, [req.params.id])
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

        deleteQuery = "DELETE FROM temp_order WHERE tempId = ?";
        pool.query(deleteQuery, [req.params.id])
            .then(row => {
                res.send("Data deleted");
            })
            .catch(err => {
                console.log("delUser Query Error ", err);
                res.end();
            });
    },
    async updateQuantity (req, res) {

        //DATA
        quantity = req.body.quantity;
        sessionid = req.body.sessionid;
        proiductId = req.body.productId;

        //query string
        updateQuery = "UPDATE temp_order SET qty = ? ";
        updateQuery += "WHERE sessionid = ? and productId = ?";

        //Executing Query
        pool.query(updateQuery, [quantity, sessionid, proiductId])
            .then(row => {
                res.send(true);
            })
            .catch(err => {
                console.log("update Query Error ", err);
                res.status(500).send('Error');
            });
    },
    async flushData (req, res) {

        deleteQuery = "DELETE FROM temp_order WHERE sessionid = ?";
        pool.query(deleteQuery, [req.params.id])
            .then(row => {
                res.send(true);
            })
            .catch(err => {
                console.log("cart empty Query Error ", err);
                res.end();
            });
    },
}