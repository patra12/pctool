<template>
  <div>
    <v-row class="form pt-0">
      <v-col class="pt-0">
        <v-row>
          <v-col outlined class="head">
            <h4 class="font-weight-light text-light">Edit Product</h4>
            <nuxt-link to="/admin/product">
              <v-icon title="back" class="right" color="white darken-1">mdi-arrow-left-bold</v-icon>
            </nuxt-link>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="bg-content">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="productName" label="Product Name"></v-text-field>

              <v-text-field v-model="productCode" label="Product Code"></v-text-field>

              <p class="grey--text text--darken-1 pt-3 mb-0">Product Description</p>

              <div v-model="productDescription" v-quill:product class="quill-editor"></div>

              <v-select
                :items="category"
                v-model="categoryName"
                @change="getCategoryId()"
                label="Category"
              ></v-select>

              <v-text-field v-model="seoUrl" label="seo URL"></v-text-field>

              <v-text-field v-model="ptype" label="ptype"></v-text-field>

              <v-text-field v-model="price" label="price" type="number"></v-text-field>

              <v-text-field v-model="sellPrice" label="Sell Price" type="number"></v-text-field>

              <v-text-field v-model="sellingQuantity" label="Sell Quantity" type="number"></v-text-field>

              <v-text-field v-model="availability" label="Availability" type="number"></v-text-field>

              <v-text-field v-model="returnPolicy" label="Return Policy"></v-text-field>

              <v-text-field v-model="stoneName" label="Stone Name"></v-text-field>

              <v-text-field v-model="plating" label="Plating"></v-text-field>

              <v-text-field v-model="colorCode" label="Color Code"></v-text-field>

              <v-text-field v-model="collectionName" label="Collection Name "></v-text-field>

              <!-- <v-text-field v-model="featureProduct" label="Feature Product"></v-text-field> -->
              <p class="grey--text text--darken-1 pt-3 mb-0">Feature Product</p>
              <v-radio-group v-model="featureProduct" class="mt-0" row>
                <v-radio label="Yes" value="Y"></v-radio>
                <v-radio label="No" value="N"></v-radio>
              </v-radio-group>

              <!-- <v-text-field v-model="addedOn" label="Added On"></v-text-field> -->

              <v-text-field v-model="displayOrder" type="number" label="Display Order"></v-text-field>

              <!-- <v-select v-model="status" :items="items" label="Status"></v-select> -->
              <p class="grey--text text--darken-1 pt-3 mb-0">Status</p>
              <v-radio-group v-model="status" class="mt-0" row>
                <v-radio label="Active" value="Y"></v-radio>
                <v-radio label="Not Active" value="N"></v-radio>
              </v-radio-group>

              <p class="grey--text text--darken-1 pt-3 mb-0">Select Image</p>
              <input
                type="file"
                multiple
                name="productImage"
                ref="productimg"
                @change="onFileChange()"
              />
              <v-row>
                <v-col v-for="(img,index) in all_image_db" :key="index">
                  <img class="product-images" :src="'http://localhost:3000/product/'+img.imageloc" />
                </v-col>
              </v-row>
              <!-- <v-select v-model="imgstatus" :items="items" label="Image Status"></v-select> -->
              <p class="grey--text text--darken-1 pt-3 mb-0">Image Status</p>
              <v-radio-group v-model="imgstatus" class="mt-0" row>
                <v-radio label="Active" value="Y"></v-radio>
                <v-radio label="Not Active" value="N"></v-radio>
              </v-radio-group>
              <v-btn @click="putData()" class="my-5 float-right" large color="primary">Save</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "AddPages",
  layout: "admin/defaultAdmin",
  data: () => ({
    valid: true,
    productId: "",
    productName: "",
    productCode: "",
    productDescription: "",
    seoUrl: "",
    ptype: "",
    price: "",
    sellPrice: "",
    availability: "",
    sellingQuantity: "",
    returnPolicy: "",
    stoneName: "",
    plating: "",
    colorCode: "",
    collectionName: "",
    displayOrder: "",
    featureProduct: "",
    addedOn: "",
    status: "",

    productImage: "",
    isPrimary: "",
    imgstatus: "",
    category: [],
    categoryName: "",
    categoryId: "",
    all_image_db: ""
  }),

  methods: {
    onFileChange() {
      const file = this.$refs.productimg.files[0];
      this.productImage = file;
    },
    getStatus() {
      return this.status === "Active" ? "Y" : "N";
    },
    setStatus(status) {
      status === "Y" ? (this.status = "Active") : (this.status = "Not Active");
    },
    putData() {
      const form = new FormData();
      form.append("product_name", this.productName);
      form.append("product_code", this.productCode);
      form.append("product_desc", this.productDescription);
      form.append("seourl", this.seoUrl);
      form.append("categoryId", this.categoryId);
      form.append("ptype", this.ptype);
      form.append("price", this.price);
      form.append("sellprice", this.sellPrice);
      form.append("sellingqnt", this.sellingQuantity);
      form.append("availability", this.availability);
      form.append("returnpolicy", this.returnPolicy);
      form.append("stonename", this.stoneName);
      form.append("plating", this.plating);
      form.append("colorcode", this.colorCode);
      form.append("collectionname", this.collectionName);
      form.append("displayorder", this.displayOrder);
      form.append("featureproduct", this.featureProduct);
      form.append("status", this.status);

      for (var datax of form.entries()) {
        console.log(datax[0], "=>", datax[1]);
      }
      this.$axios({
        url: "/putproduct/" + this.$route.params.id,
        method: "PUT",
        headers: {
          header: { "Content-Type": "multipart/form-data" }
        },
        data: form
      })
        .then(res => {
          this.$router.push({
            path: "/admin/product"
          });
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    getData() {
      this.$axios({
        url: "/monoproduct/" + this.$route.params.id,
        method: "get"
      })
        .then(res => {
          this.productId = res.data[0].productId;
          this.productName = res.data[0].product_name;
          this.productCode = res.data[0].product_code;
          this.productDescription = res.data[0].product_desc;
          this.seoUrl = res.data[0].seourl;
          this.getCategoryName(res.data[0].categoryId);
          this.ptype = res.data[0].ptype;
          this.price = res.data[0].price;
          this.sellPrice = res.data[0].sellprice;
          this.availability = res.data[0].availability;
          this.sellingQuantity = res.data[0].sellingqnt;
          this.returnPolicy = res.data[0].returnpolicy;
          this.stoneName = res.data[0].stonename;
          this.plating = res.data[0].plating;
          this.colorCode = res.data[0].colorcode;
          this.collectionName = res.data[0].collectionname;
          this.displayOrder = res.data[0].displayorder;
          this.featureProduct = res.data[0].featureproduct;
          this.addedOn = res.data[0].addedon;
          this.status = res.data[0].status;
          this.getimgstatus();
          this.get_images_accordin_productid();
        })
        .catch(err => {
          // handle errorr
          console.log(err);
        });
    },
    getCategoryNames() {
      this.$axios({
        method: "GET",
        url: "/getallctegorynames"
      })
        .then(res => {
          this.category = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getCategoryName(catId) {
      this.$axios({
        method: "GET",
        url: `/monocategory/${catId}`
      })
        .then(res => {
          this.categoryName = res.data[0].categoryname;
          this.categoryId = catId;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getCategoryId() {
      this.$axios({
        method: "POST",
        url: "/getctegoryid",
        header: {
          "content-type": { "Content-Type": "multipart/form-data" }
        },
        data: { categoryname: this.categoryName }
      })
        .then(res => {
          this.categoryId = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getimgstatus() {
      this.$axios({
        method: "GET",
        url: `/getimagestatus/${this.productId}`
      })
        .then(res => {
          this.imgstatus = res.data[0].status;
        })
        .catch(err => {
          console.log(err);
        });
    },
    get_images_accordin_productid() {
      this.$axios({
        method: "GET",
        url: `/getimages/${this.productId}`
      })
        .then(res => {
          this.all_image_db = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCategoryNames();
    this.getData();
  }
};
</script>
<style>
.border {
  border: 1px solid blue;
}
.brigrt {
  border-right: 1px solid blue;
}
.product-images {
  width: 100%;
  height: 50%;
}
</style>