const pool = require('../db')

module.exports = {
  // View settings
  fetchSetings:(req,res)=>{
  	pool.getConnection((err,con)=>{
  		if(!err){
  			selectQuery = "SELECT * FROM `settings`";
  			con.query(selectQuery,(err,row)=>{
  				if(!err){
  					res.send(row);	
  				}
  				else{
  					throw err;		
  				}
  				
  			});
  		}
  		else{
  			console.log(err);
  		}
  	})
  },

  // Update settings
  updateSettings: (req, res) => {
    pool.getConnection((err, con) => {
      if (!err) {
        const siteName = req.body.siteName
        const siteUrl = req.body.siteUrl
        const adminEmail = req.body.adminEmail
        const paypalEmail = req.body.paypalEmail
        const results = req.body.results
        const homeMetaTitle = req.body.homeMetaTitle
        const homeMetaKeyword = req.body.homeMetaKeyword
        const ganalytyc = req.body.ganalytyc
        const fbUrl = req.body.fbUrl
        const instagramUrl = req.body.instagramUrl

        let insertQuery = 'UPDATE `settings` SET `site_name`=?,`site_url`=?,`admin_email`=?,`paypal_email`=?,`results`=?,`homemetatitle`=?,`homemetakeyword`=?,`homemetadescription`=?,`ganalytyc`=?,`fburl`=?,`instagramurl`=? WHERE id = ?'
        insertQuery +=
          ' `showtitle`, `description`, `metatitle`, `metakeyword`, '
        insertQuery += '`metadescription`, `displayorder`, `status`) VALUES '
        insertQuery += "(?,?,?,?,?,?,?,?,?,?)";

        console.log(insertQuery)

        con.query(insertQuery,[siteName,siteUrl,adminEmail,paypalEmail,results,homeMetaTitle,homeMetaKeyword,ganalytyc,fbUrl,instagramUrl], (err, result) => {
          // When done with the connection, release it.
          con.release()

          // Handle error after the release.
          if (!err) {
            res.send('data inserted')
          } else {
            throw err
          }
        })
      } else {
        console.log(err)
      }
    })
    // res.send('test page controller' )
  }
}

