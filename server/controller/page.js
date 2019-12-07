const pool = require('../db')

module.exports = {
  // Add Page
  addPage: (req, res) => {
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

        let insertQuery = 'INSERT INTO `pages`(`menutitle`, `title`, `seourl`,'
        insertQuery +=
          ' `showtitle`, `description`, `metatitle`, `metakeyword`, '
        insertQuery += '`metadescription`, `displayorder`, `status`) VALUES '
        insertQuery += "(?,?,?,?,?,?,?,?,?,?)";
        // insertQuery += menuTitle + "','"
        // insertQuery += title + "','"
        // insertQuery += seoUrl + "','"
        // insertQuery += showTitle + "','"
        // insertQuery += pageDescription + "','"
        // insertQuery += metaTitle + "','"
        // insertQuery += metaKeyword + "','"
        // insertQuery += metaDescription + "','"
        // insertQuery += displayOrder + "','"
        // insertQuery += status + "'"
        // insertQuery += ')'

        con.query(insertQuery,[menuTitle,title,seoUrl,showTitle,pageDescription,metaTitle,metaKeyword,metaDescription,displayOrder,status], (err, result) => {
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
