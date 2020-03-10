const Lib = require("../util/lib");
var tableName = 'product';

class Select {

  // find all record form product table
  async find () {
    const selectQuery = "SELECT * FROM " + tableName;
    return (await Lib.execute(selectQuery));
  }

  //find reocrd by name
  async findbyName (name) {
    const selectQuery = "SELECT * FROM " + tableName + " where `product_name`= ?";
    return (await Lib.execute(selectQuery, [name]));
  }

  //find reocrd by name id
  async findbyId (id) {
    const selectQuery = "SELECT * FROM " + tableName + " where `productId`= ?";
    return (await Lib.execute(selectQuery, [id]));
  }

  //find record from images table according to product
  async findImagebyId (id) {
    const selectQuery = "SELECT * FROM  `product_image`  where productId = ?";
    return (await Lib.execute(selectQuery, [id]));
  }

  async findProductByCategory (catagory) {
    selsctQuery = "SELECT * FROM " + tableName + " WHERE categoryId = (SELECT categoryId FROM category WHERE seourl = ?)";
    return (await Lib.execute(selsctQuery, [catagory]));
  }

  async findImagesNameById (id) {

  }
}

module.exports = new Select();
