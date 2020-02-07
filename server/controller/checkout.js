var pool = require("../db/db")

module.exports = {

  // get all Record from a table
  getPagebirja: (req, res) => {
    // query
    selectQuery = "SELECT * FROM `pages`";
    pool.query(selectQuery)
      .then(row => {
        //send data to frontend
        res.send(row);
      })
      .catch(err => {
        //log query error message to server and stop execution
        console.log(' Query Error', err);
        res.end();
      })

  },
  //for billing shipping and order details
  async addnewOrder(req, res) {
//for billing
    bill_userId = req.body.bill_userId;
    bill_firstname = req.body.bill_firstname;
    bill_lastname = req.body.bill_lastname;
    bill_email = req.body.bill_email;
    bill_address = req.body.bill_address;
    bill_city = req.body.bill_city;
    bill_zipcode = req.body.bill_zipcode;
    bill_phone = req.body.bill_phone;
    bill_country = req.body.bill_country;

     //for shipping
     ship_userId = req.body.ship_userId;
     ship_firstname = req.body.ship_firstname;
     ship_lastname = req.body.ship_lastname;
     ship_email = req.body.ship_email;
     ship_address = req.body.ship_address;
     ship_city = req.body.ship_city;
     ship_zipcode = req.body.ship_zipcode;
     ship_phone = req.body.ship_phone;
     ship_country = req.body.ship_country;

     //for order
     order_userId = req.body.order_userId;
     order_amt=req.body.order_amt;
     shippingcost=req.body.shippingcost;
     order_grand_total=req.body.order_grand_total;


    insertQuery = "INSERT INTO  `billing_master`(`userId`,`firstname`, `lastname`,`email`, `address`, `city`, `zipcode`, `phone`,`country`";
    insertQuery += ")VALUES(";
    insertQuery += " ?,";
    insertQuery += " ?,";
    insertQuery += " ?,";
    insertQuery += " ?,";
    insertQuery += " ?,";
    insertQuery += " ?,";
    insertQuery += " ?,";
    insertQuery += " ?,";
    insertQuery += " ?)";
    
pool.query(insertQuery, [bill_userId,bill_firstname, bill_lastname,bill_email, bill_address, bill_city, bill_zipcode, bill_phone,bill_country])
        .then(row => {
            billingId = row.insertId;
            console.log("last inserted billing Id",billingId);

          //for shipping table
            innerInsertQuery = "INSERT INTO  `shipping_master`(`userId`,`firstname`, `lastname`,`email`, `address`, `city`, `zipcode`, `phone`,`country`";
            innerInsertQuery += ")VALUES(";
            innerInsertQuery += " ?,";
            innerInsertQuery += " ?,";
            innerInsertQuery += " ?,";
            innerInsertQuery += " ?,";
            innerInsertQuery += " ?,";
            innerInsertQuery += " ?,";
            innerInsertQuery += " ?,";
            innerInsertQuery += " ?,";
            innerInsertQuery += " ?)";
//shipping inner query
pool.query(innerInsertQuery, [ship_userId,ship_firstname, ship_lastname, ship_email, ship_address, ship_city, ship_zipcode, ship_phone, ship_country]) .then(row => {
      shippingId = row.insertId;
      console.log("last inserted shippingId Id",shippingId);

      //for order table
      innerInsertQuery1 = "INSERT INTO  `order_master`(`userId`,`billingId`, `shippingId`,`order_amt`, `shippingcost`, `order_grand_total`";
      innerInsertQuery1 += ")VALUES(";
      innerInsertQuery1 += " ?,";
      innerInsertQuery1 += " ?,";
      innerInsertQuery1 += " ?,";
      innerInsertQuery1 += " ?,";    
      innerInsertQuery1 += " ?,";    
      innerInsertQuery1 += " ?)";
//order inner query
pool.query(innerInsertQuery1, [order_userId,billingId, shippingId, order_amt, shippingcost, order_grand_total]) .then(row => {
})
      })

      
            res.send("Data is inserted");
        })
        .catch(err => {
            console.log("Billing Query Error", err);
            res.end();
        });
    
},


}