/** !************************************************************************************
  File functionality is written by soumitra patra .
  This file contains utility helper functions which are for reduct repetaion in code.
  in thise catagory specific.
  mantainability and use of this file is fully responsible to developer.
****************************************************************************************/
const pool = require("../../db/db");


class Library {
  async execute (Query, args) {
    try {
      return await pool.query(Query, args)
        .then(res => res);
    }
    catch (err) {
      return "internal query err";
    }
  }
}

module.exports = new Library();
