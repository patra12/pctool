var pool = require("../db/db")

module.exports = {

  // get all Record from a table
  getPage: (req, res) => {
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

  // get single Record from table
  monoPage(req, res) {

    // query
    selectQuery = "SELECT * FROM `pages` where `pageId`= ?";
    pool.query(selectQuery, [req.params.id])
      .then(row => {
        //send data to frontend
        res.send(row);
      })
      .catch(err => {
        //log query error message to server and stop execution
        console.log('getUser Query Error', err)
        res.end();
      });
  },

  // insert Record into table
  addPage(req, res) {
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
    let insertQuery = 'INSERT INTO `pages`(`menutitle`, `title`, `seourl`,';
    insertQuery +=
      ' `showtitle`, `description`, `metatitle`, `metakeyword`, ';
    insertQuery += '`metadescription`, `displayorder`, `status`) VALUES ';
    insertQuery += "(?,?,?,?,?,?,?,?,?,?)";
    pool.query(insertQuery, [menuTitle, title, seoUrl, showTitle,
      pageDescription, metaTitle, metaKeyword, metaDescription,
      displayOrder, status])
      .then(row => {
        //send data to frontend
        res.send("Date is inserted");
      })
      .catch(err => {
        //log query error message to server and stop execution
        console.log("addUser Query Error", err);
        res.end();
      });
  },

  // delete Record from table
  delPage(req, res) {
    // query
    deleteQuery = "DELETE FROM `pages` WHERE `pageId` = " + req.params.id;
    pool.query(deleteQuery)
      .then(row => {
        //send data to frontend
        res.send("Data deleted successfully");
      })
      .catch(err => {
        //log query error message to server and stop execution
        console.log("delUser Query Error ", err);
        res.end();
      });
  },

  // update a Record in table
  putPage(req, res) {

    //data to be updated
    const title = req.body.title
    const menuTitle = req.body.menuTitle
    const showTitle = req.body.showTitle
    const seoUrl = req.body.seoUrl
    const pageDescription = req.body.pageDescription
    const metaTitle = req.body.metaTitle
    const metaKeyword = req.body.metaKeyword
    const metaDescription = req.body.metaDescription
    const displayOrder = req.body.displayOrder
    const status = req.body.status;
    const id = req.params.id;

    // query
    updateQuery = "UPDATE `pages` SET";
    updateQuery += "`menutitle`= '" + menuTitle + "',";
    updateQuery += "`title`= '" + title + "',";
    updateQuery += "`seourl`= '" + seoUrl + "',";
    updateQuery += "`showtitle`= '" + showTitle + "',";
    updateQuery += "`description`= '" + pageDescription + "',";
    updateQuery += "`metatitle`= '" + metaTitle + "',";
    updateQuery += "`metakeyword`= '" + metaKeyword + "',";
    updateQuery += "`metadescription`= '" + metaDescription + "',";
    updateQuery += "`displayorder`= '" + displayOrder + "',";
    updateQuery += "`status`= '" + status + "' ";
    updateQuery += "WHERE `pageId` = " + id + "";

    pool.query(updateQuery)
      .then(row => {
        //send data to frontend
        res.send("Data Updated successfully");
      })
      .catch(err => {
        // log query error message to server and stop execution
        console.log("putUser Query Error ", err);
        res.end();
      });
  },


  /**
   * for testing middleware function
   */
  testval(req, res) {
    // query
    selectQuery = "SELECT * FROM `pages`";
    return new Promise((resolve, reject) => {
      pool.query(selectQuery)
        .then(row => {
          //send data to frontend
          resolve(row);
        })
        .catch(err => {
          //log query error message to server and stop execution
          reject(' Query Error', err)
        });

    })
  },
  delay({ data }, res) {
    res.send(data);
    res.end();
  }

}
