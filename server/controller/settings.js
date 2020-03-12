const pool = require('../db/db')

module.exports = {

  // View settings
  getSetings: (req, res) => {
    selectQuery = "SELECT * FROM `settings`";
    pool.query(selectQuery)
      .then(row => {
        //send data to frontend
        res.send(row);
      })
      .catch(err => {
        //log query error message to server and stop execution
        console.log(' Query Error', err);
        res.end();
      });
  },

  // Update settings
  updateSettings: (req, res) => {
    //data to be updated
    const siteName = req.body.site_name
    const siteUrl = req.body.site_name
    const adminEmail = req.body.admin_email
    const paypalEmail = req.body.paypal_email
    const results = req.body.results
    const address = req.body.address
    const phone = req.body.phone
    const homeMetaTitle = req.body.homemetatitle
    const homeMetaKeyword = req.body.homemetakeyword
    const homeMetaDescription = req.body.homemetadescription
    const ganalytyc = req.body.ganalytyc
    const fbUrl = req.body.fburl
    const instagramUrl = req.body.instagramurl

    //update query
    let updateQuery = 'UPDATE `settings` SET ';
    updateQuery += "`site_name`=?,";
    updateQuery += "`site_url`=?,";
    updateQuery += "`admin_email`=?,";
    updateQuery += "`paypal_email`=?,";
    updateQuery += "`results`=?,";
    updateQuery += "`address`=?,";
    updateQuery += "`phone`=?,";
    updateQuery += "`homemetatitle`=?,";
    updateQuery += "`homemetakeyword`=?,";
    updateQuery += "`homemetadescription`=?,";
    updateQuery += "`ganalytyc`=?,";
    updateQuery += "`fburl`=?,";
    updateQuery += "`instagramurl`=?";

    pool.query(updateQuery, [siteName, siteUrl, adminEmail,
      paypalEmail, results, address, phone, homeMetaTitle, homeMetaKeyword, homeMetaDescription, ganalytyc, fbUrl, instagramUrl])
      .then(row => {
        //send data to frontend
        res.send('data updated')
      })
      .catch(err => {
        //log query error message to server and stop execution
        console.log("Query Error updateSettings", err);
        res.end();
      });
  }
}

