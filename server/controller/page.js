var pool = require("../db")

module.exports = {

  // get all Record from a table
  getPage: (req, res) => {
    //creating connection
    pool.getConnection((err, con) => {
      if (!err) {
        // query
        selectQuery = "SELECT * FROM `pages`";
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
  monoPage: (req, res) => {
    //creating connection
    pool.getConnection((err, con) => {
      if (!err) {
        // query
        selectQuery = "SELECT * FROM `pages` where `pageId`= ?";
        con.query(selectQuery, [req.params.id], (err, row) => {
          // When done with the connection, release it.
          con.release()
          if (!err) {
            //send data to frontend
            res.send(row);
          }
          else {
            //log query error message to server and stop execution
            console.log('getUser Query Error', err)
            res.end();
          }
        });
      }
      else {
        //log db error message to server and stop execution
        console.log("getUser Db Error", err);
        res.end();
      }
    })
  },

  // insert Record into table
  addPage: (req, res) => {
    //creating connection
    pool.getConnection((err, con) => {
      if (!err) {
        const title = req.body.title
        const menuTitle = req.body.menuTitle
        const showTitle = req.body.showTitle
        const seoUrl = req.body.seoUrl
        const pageDescription = req.body.pageDescription
        const metaTitle = req.body.metaTitle
        const metaKeyword = req.body.metaKeyword
        const metaDescription = req.body.metaDescription
        const displayOrder = req.body.displayOrder
        const status = req.body.status
        // query
        let insertQuery = 'INSERT INTO `pages`(`menutitle`, `title`, `seourl`,'
        insertQuery +=
          ' `showtitle`, `description`, `metatitle`, `metakeyword`, '
        insertQuery += '`metadescription`, `displayorder`, `status`) VALUES '
        insertQuery += "(?,?,?,?,?,?,?,?,?,?)";
        con.query(inserQuery, [title, menuTitle, showTitle, seoUrl,
          pageDescription, metaTitle, metaKeyword, metaDescription,
          displayOrder, status], (err, row) => {
            // When done with the connection, release it.
            con.release()
            if (!err) {
              //send data to frontend
              res.send("Date is inserted");
            }
            else {
              //log query error message to server and stop execution
              console.log("addUser Query Error", err);
              res.end();
            }
          })
      }
      else {
        //log db error message to server and stop execution
        console.log("addUser DB ERROR", err);
        res.end();
      }

    })
  },

  // delete Record from table
  delPage: (req, res) => {
    //creating connection
    pool.getConnection((err, con) => {
      if (!err) {
        // query
        deleteQuery = "DELETE FROM `pages` WHERE 	pageId = " + req.params.id;
        con.query(deleteQuery, (err, row) => {
          // When done with the connection, release it.
          con.release()
          if (!err) {
            //send data to frontend
            res.send("Data deleted successfully");
          }
          else {
            //log query error message to server and stop execution
            console.log("delUser Query Error ", err);
            res.end();
          }
        })
      }
      else {
        //log db error message to server and stop execution
        console.log("delUser DB ERROR", err);
        res.end();
      }
    });
  },

  // update a Record in table
  putUsre: (req, res) => {
    //creating connection
    pool.getConnection((err, con) => {
      if (!err) {
        const title = req.body.title
        const menuTitle = req.body.menuTitle
        const showTitle = req.body.showTitle
        const seoUrl = req.body.seoUrl
        const pageDescription = req.body.pageDescription
        const metaTitle = req.body.metaTitle
        const metaKeyword = req.body.metaKeyword
        const metaDescription = req.body.metaDescription
        const displayOrder = req.body.displayOrder
        const status = req.body.status
        // query
        updateQuery = "UPDATE `pages` SET";
        updateQuery += "`menutitle`= ?,";
        updateQuery += "`title`= ?,";
        updateQuery += "`seourl`= ?,";
        updateQuery += "`showtitle`= ?,";
        updateQuery += "`description`= ?,";
        updateQuery += "`metatitle`= ?,";
        updateQuery += "`metakeyword`= ?,";
        updateQuery += "`metadescription`= ?,";
        updateQuery += "`displayorder`= ?,";
        updateQuery += "`status`= ? ";
        updateQuery += "WHERE `	pageId` = ?";
        con.query(updateQuery, [title, menuTitle, showTitle, seoUrl, pageDescription, status, metaTitle, metaKeyword, metaDescription, displayOrder, id], (err, row) => {
          // When done with the connection, release it.
          con.release()
          if (!err) {
            //send data to frontend
            res.send("Data Updated successfully");
          }
          else {
            //log query error message to server and stop execution
            console.log("putUser Query Error ", err);
            res.end();
          }
        })
      }
      else {
        //log db error message to server and stop execution
        console.log("putUser DB ERROR", err);
        res.end();
      }
    });
  }

}
