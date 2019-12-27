const pool = require('./db');

module.exports = {
    async sdata(tablename, columname, idcol, idval) {
        query = `SELECT ${columname} FROM  ${tablename} WHERE ${idcol} = ${idval}`
        await pool.query(query)
            .then(row => {
                return row;
            })
            .catch(err => {
                console.log(err)
            })
    }
}
