const pool = require('../db')

module.exports = {
  // View settings
  getSetings: (req, res) => {
    selectQuery = "SELECT * FROM `settings`";
    pool.query(selectQuery, (err, row) => {
      if (!err) {
        res.send(row);
      }
    });
  },

  // Update settings
  updateSettings: (req, res) => {
    pool.getConnection((err, con) => {
      if (!err) {
        const siteName = req.body.site_name
        const siteUrl = req.body.site_name
        const adminEmail = req.body.admin_email
        const paypalEmail = req.body.paypal_email
        const results = req.body.results
        const homeMetaTitle = req.body.homemetatitle
        const homeMetaKeyword = req.body.homemetakeyword
        const homeMetaDescription = req.body.homemetadescription
        const ganalytyc = req.body.ganalytyc
        const fbUrl = req.body.fburl
        const instagramUrl = req.body.instagramurl

        let updateQuery = 'UPDATE `settings` SET ';
        updateQuery += "`site_name`=?,";
        updateQuery += "`site_url`=?,";
        updateQuery += "`admin_email`=?,";
        updateQuery += "`paypal_email`=?,";
        updateQuery += "`results`=?,";
        updateQuery += "`homemetatitle`=?,";
        updateQuery += "`homemetakeyword`=?,";
        updateQuery += "`homemetadescription`=?,";
        updateQuery += "`ganalytyc`=?,";
        updateQuery += "`fburl`=?,";
        updateQuery += "`instagramurl`=?";

        console.log(updateQuery)

        con.query(updateQuery, [siteName, siteUrl, adminEmail, paypalEmail, results, homeMetaTitle, homeMetaKeyword, homeMetaDescription, ganalytyc, fbUrl, instagramUrl], (err, result) => {
          // When done with the connection, release it.
          con.release()

          // Handle error after the release.
          if (!err) {
            res.send('data updated')
          } else {
            console.log("Query Error updateSettings", err);
          }
        })
      } else {
        console.log("DB Error updateSettings", err)
      }
    })
  }
}

