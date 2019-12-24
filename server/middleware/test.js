const con = require("../db/db");
const product = {
    async test(req, res, next) {
        selectQuery = "SELECT * FROM `pages` where `pageId`= " + req.params.id;
        req.data = await con.query(selectQuery, [req.params.id])
            .then(rows => {
                return rows;
            })
            .catch(err => {
                console.log(err);
            });
        next();
    }
}

module.exports = product;