const mysql = require('mysql');
<<<<<<< HEAD
require('dotenv').config()
=======
require('dotenv').config();
>>>>>>> frontend
class Database {
    constructor() {
        this.connection = mysql.createPool({
            connectionLimit: 100, //importent 
<<<<<<< HEAD
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: process.env.PASSWORD,
=======
            host: process.env.HOST, //|| 'localhost',
            user: process.env.USER,//'root',
            database: process.env.DB_NAME,//'node_pctool',
            password: process.env.PASSWORD,// '',
>>>>>>> frontend
            debug: false,
        });
    }
    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err)
                    return reject(err);
                resolve(rows);
            });
        });
    }
    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }
}


module.exports = new Database();