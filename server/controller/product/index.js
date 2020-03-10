const pool = require("../../db/db")
const helper = require("../util/lib");
const tableName = 'product';
const fs = require('fs');
const fpath = require('path');
const product_image_location_on_disk = "upload/products/"
const select = require("./select");
const lib = require("./lib.js");

`use strict;`
module.exports = {

  // get all Record from a table
  async getProduct (req, res) {
    const data = await select.find()
      .then(row => { res.json(row) })
      .catch(err => { console.log(err + "getproduct query error") });
    // res.json(data);
  },
  imageDb (id) {
    const data = select.findImagebyId(id)
      .then(row => { return row })
      .catch(err => { console.log("getImages query error" + err) });
    console.log(data);
    return data;
  },
  async getProductWithImage (req, res) {
    https://drive.google.com/open?id=1ykQTsayWhXby1nj9zALn4GCRjUNx0d5x
    select.find()
      .then(async row => {

        jsonData = [];
        console.log("len", row.length);
        for (product in row) {

          console.log(row[product].productId);
          console.log('{');
          let data = "{";
          Object.keys(row[product]).forEach(async function (key) {
            console.table(key + ': ' + row[product][key])
            data += key + ': ' + row[product][key] + ','
            data += product == row.length ? "" : ',';
          })
          const datax = await select.findImagebyId(row[product].productId)
            .then(row => { return row })
            .catch(err => { console.log("monoProduct query error") });
          console.log("image:{");
          var imagearray = [];
          for (image in datax) {
            imagearray.push(datax[image].imageloc);
          }
          console.log('}');
          data += "}";
          console.log('}');
          console.log("crafted : ", data);
        }
        res.json(row)
      })
      .catch(err => { console.log(err + "getproduct query error") });
    // res.json(data);
  },

  // get single Record from table
  monoProduct (req, res) {
    select.findbyId(req.params.id)
      .then(row => { res.json(row) })
      .catch(err => { console.log("monoProduct query error") });
  },

  getImages: (req, res) => {
    select.findImagebyId(req.params.id)
      .then(row => { res.json(row) })
      .catch(err => { console.log("getImages query error" + err) });
  },

  getProuductByCat (req, res) {
    select.findProductByCategory(req.params.id)
      .then(row => { res.json(row); console.log(row) })
      .catch(err => { console.log("getProuductByCat query error" + err) });
  },

  /**
   * insert Record into table
   * insert record to product table but
   * this table has relation hence
   * in this function there is inner query present
   */
  async addProduct (req, res) {
    product_name = req.body.product_name;
    product_code = req.body.product_code;
    meta_title = req.body.metaTitle;
    product_desc = req.body.product_desc;
    meta_description = req.body.metaDescription;
    seourl = req.body.seourl;
    categoryId = req.body.categoryId;
    price = req.body.price;
    sellprice = req.body.sellprice;
    availability = req.body.availability;
    featureproduct = req.body.featureproduct;
    status = req.body.status;

    //outer query
    inserQuery = "INSERT INTO " + tableName + "(`product_name`, ";
    inserQuery += "`sku`,`meta_title`, `product_desc`,`meta_description`, `seourl`, ";
    inserQuery += "`categoryId`,  `price`,`sellprice`, `availability`,";
    inserQuery += "`featureproduct`,";
    inserQuery += " `status`)";
    inserQuery += "VALUES";
    inserQuery += "(?,?,?,?,?,?,?,?,?,?,?,?)";

    //outer query executiion
    insertId = await pool.query(inserQuery, [product_name, product_code, meta_title,
      product_desc, meta_description, seourl, categoryId,
      price, sellprice, availability, featureproduct, status])
      .then(async row => {
        //if image is not send form frontend then no image uploade
        if (req.files != null) {

          pid = row.insertId;
          //inner query
          innerInsertQuery = "INSERT INTO `product_image`(`productId`, "
          innerInsertQuery += "`image_caption`,`imageloc`) VALUES ";
          innerInsertQuery += "(?,?,?)"


          if (req.body.imageCount == 1) {

            // uploading if thair is single image 
            const upimage = req.files.productImage
            const imagename = await helper.ImageUpload(upimage, "upload/products/");

            //inserting data for the single image name into db
            await pool.query(innerInsertQuery, [pid, "caption", imagename],
              (err, row) => {
                if (err) { console.log(err); }
                else { res.send(`data inserted`); }
              })
          }
          else {
            // uploading if their is multiple image
            for (image in req.files.productImage) {
              const multiImage = req.files.productImage[image]
              const imagename = await helper.ImageUpload(multiImage, "upload/products/");

              //inserting multiple image data into db
              await pool.query(innerInsertQuery, [pid, "caption", imagename],
                (err, row) => {
                  if (err) { console.log(err); }
                  else { res.send(`data inserted`); }
                })
            }
          }
        }
      })

      //if outer inserte query failed
      .catch(err => {
        console.log(err)
      });

    //if every thing failed
    res.end(false);

  },



  /**
   * Delete product along with image form disk and db also
   */
  async delProduct (req, res) {

    //searching image into db
    imageNameQuery = "SELECT imageloc FROM `product_image` WHERE productId = ?";
    images_delete_form_disk = await pool.query(imageNameQuery, [req.params.id])
      .then(row => { return row })
      .catch(err => { console.log(err) });


    //if we get images then delete it
    if (images_delete_form_disk.length != 0) {
      for (image in images_delete_form_disk) {
        image_location_for_delete = product_image_location_on_disk + images_delete_form_disk[image].imageloc;
        fs.unlink(image_location_for_delete, (err) => {
          if (err) throw err;
        });
      }
      deleteQuery = "DELETE p,pi FROM `product` p, `product_image` pi WHERE p.productId =" + req.params.id + " AND pi.productId = " + req.params.id;
      await pool.query(deleteQuery)
        .then(row => {
          res.send(`${row.affectedRows} Rows are deleted from DB `)
        })
        .catch(err => { console.log(err) });
    }
    else {
      deleteQuery = "DELETE FROM `product` WHERE productId =" + req.params.id;
      await pool.query(deleteQuery)
        .then(row => {
          res.send(`${row.affectedRows} Rows are deleted from DB `);
        })
        .catch(err => { console.log(err) });
    }
  },

  // update a Record in table
  async putProduct (req, res) {

    product_name = req.body.product_name;
    product_code = req.body.product_code;
    meta_title = req.body.metaTitle;
    product_desc = req.body.product_desc;
    meta_description = req.body.metaDescription;
    seourl = req.body.seourl;
    categoryId = req.body.categoryId;
    price = req.body.price;
    sellprice = req.body.sellprice;
    availability = req.body.availability;
    featureproduct = req.body.featureproduct;
    status = req.body.status;
    id = req.params.id;

    is_primary = req.body.imgstatus;
    //data veariables for image
    pid = req.params.id;


    // query
    updateQuery = "UPDATE " + tableName + " SET";
    updateQuery += "`product_name`= ?,";
    updateQuery += "`sku`= ?,";
    updateQuery += "`meta_title`= ?,";
    updateQuery += "`product_desc`= ?,";
    updateQuery += "`meta_description`= ?,";
    updateQuery += "`seourl`= ?,";
    updateQuery += "`categoryId`= ?,";
    updateQuery += "`price`= ?,";
    updateQuery += "`sellprice`= ?,";
    updateQuery += "`availability`= ?,";
    updateQuery += "`featureproduct`= ?,";
    updateQuery += "`status`= ? ";
    updateQuery += "WHERE `ProductId` = ?";


    // selecting that image is prestent in db
    const prodid = req.params.id;
    selectQuery = `SELECT * FROM  \`product_image\`  where productId = ?`;
    images_from_db = await pool.query(selectQuery, [prodid])
      .then(row => { return row; })
      .catch(err => { console.log(err); res.end(); })


    //Options for image upload
    // multiple image upload with normal user permission in linux platform

    //inner query
    innerInsertQuery = "INSERT INTO `product_image`(`productId`, "
    innerInsertQuery += "`image_caption`,`imageloc`) VALUES ";
    innerInsertQuery += "(?,?,?)"

    //check we get any image or not
    if (req.body.imageCount > 0) {
      //check we already have any image in db and disk or not
      if (images_from_db.length > 0) {

        //searching image into db
        imageNameQuery = "SELECT imageloc FROM `product_image` WHERE productId = ?";
        images_delete_form_disk = await pool.query(imageNameQuery, [req.params.id])
          .then(row => { return row })
          .catch(err => { console.log(err) });


        //if we get images then delete it from disk and db
        if (images_delete_form_disk.length != 0) {
          //deleting images form disk
          for (image in images_delete_form_disk) {
            image_location_for_delete = product_image_location_on_disk + images_delete_form_disk[image].imageloc;
            fs.unlink(image_location_for_delete, (err) => {
              if (err) throw err;
            });
          }
          //deleting image form db
          deleteQuery = "DELETE  FROM `product_image` WHERE productId =" + req.params.id;
          await pool.query(deleteQuery)
            .then(row => {
              // res.send(`${row.affectedRows} Rows are deleted from DB `)
            })
            .catch(err => { console.log(err) });
        }

        // if image already exist then after deleting theme
        // insert new image sended form update

        // single image upload
        if (req.body.imageCount == 1) {
          console.log("single", req.body.imageCount);
          const upimage = req.files.productImage
          const imagename = await helper.ImageUpload(upimage, "upload/products/");
          //inner query
          await pool.query(innerInsertQuery, [pid, "caption", imagename],
            (err, row) => {
              if (err) { console.log(err); }
              else { res.send(`data inserted`); }
            })
        }
        //multiple image upload
        else {
          console.log("multi", req.body.imageCount);
          for (image in req.files.productImage) {
            const multiImage = req.files.productImage[image]
            const imagename = await helper.ImageUpload(multiImage, "upload/products/");

            //inner query
            await pool.query(innerInsertQuery, [pid, "caption", imagename],
              (err, row) => {
                if (err) { console.log(err); }
                else { res.send(`data inserted`); }
              })
          }
        }
      }
      //if we get any image but there is no existing image on db
      else {
        // single image upload
        if (req.body.imageCount == 1) {
          console.log("single", req.body.imageCount);
          const upimage = req.files.productImage
          const imagename = await helper.ImageUpload(upimage, "upload/products/");
          console.log("count", req.body.imageCount);
          //inner query
          await pool.query(innerInsertQuery, [pid, "caption", imagename],
            (err, row) => {
              if (err) { console.log(err); }
              else { res.send(`data inserted`); }
            })
        }
        //multiple image upload
        else {
          console.log("multi", req.body.imageCount);
          for (image in req.files.productImage) {
            const multiImage = req.files.productImage[image]
            const imagename = await helper.ImageUpload(multiImage, "upload/products/");

            //inner query
            await pool.query(innerInsertQuery, [pid, "caption", imagename],
              (err, row) => {
                if (err) { console.log(err); }
                else { res.send(`data inserted`); }
              })
          }
        }
      }
    }




    var see = await pool.query(updateQuery, [product_name, product_code,
      meta_title, product_desc, meta_description, seourl, categoryId,
      price, sellprice, availability, featureproduct, status, id])
      .then(row => {
        res.send("Data Updated successfully");
      })
      .catch(err => {
        console.log("putProduct DB ERROR", err);
        res.end();
      })
  }
}
