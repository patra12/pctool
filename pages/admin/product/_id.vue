<template>
  <div>
    <v-row class="form pt-0">
      <v-col class="pt-0">
        <v-row>
          <v-col
            outlined
            class="head"
          >
            <h4 class="font-weight-light text-light">Edit Product</h4>
            <nuxt-link to="/admin/product">
              <v-icon
                title="back"
                class="right"
                color="white darken-1"
              >mdi-arrow-left-bold</v-icon>
            </nuxt-link>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="bg-content">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="productName"
                label="Product Name"
              ></v-text-field>

              <v-text-field
                v-model="sku"
                label="SKU"
              ></v-text-field>

              <p class="grey--text text--darken-1 pt-3 mb-0">Product Description</p>

              <div
                v-model="productDescription"
                v-quill:product
                class="quill-editor"
              ></div>

              <v-select
                :items="category"
                v-model="categoryName"
                @change="getCategoryId()"
                label="Category"
              ></v-select>

              <v-text-field
                v-model="seoUrl"
                label="seo URL"
              ></v-text-field>

              <v-text-field
                v-model="price"
                label="price"
                type="number"
              ></v-text-field>

              <v-text-field
                v-model="sellPrice"
                label="Sell Price"
                type="number"
              ></v-text-field>

              <v-text-field
                v-model="availability"
                label="Availability"
                type="number"
              ></v-text-field>

              <p class="grey--text text--darken-1 pt-3 mb-0">Feature Product</p>
              <v-radio-group
                v-model="featureProduct"
                class="mt-0"
                row
              >
                <v-radio
                  label="Yes"
                  value="Y"
                ></v-radio>
                <v-radio
                  label="No"
                  value="N"
                ></v-radio>
              </v-radio-group>

              <p class="grey--text text--darken-1 pt-3 mb-0">Status</p>
              <v-radio-group
                v-model="status"
                class="mt-0"
                row
              >
                <v-radio
                  label="Active"
                  value="Y"
                ></v-radio>
                <v-radio
                  label="Not Active"
                  value="N"
                ></v-radio>
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
                <v-col
                  v-for="(img,index) in all_image_db"
                  :key="index"
                >
                  <img
                    class="showing-images"
                    :src="parseImage(all_image_db[index].imageloc)"
                  />
                </v-col>
              </v-row>

              <v-btn
                @click="putData()"
                class="my-5 float-right"
                large
                color="primary"
              >Save</v-btn>
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
    sku: "",
    productDescription: "",
    seoUrl: "",
    price: "",
    sellPrice: "",
    availability: "",
    featureProduct: "",
    status: "",

    isPrimary: "",
    //for select box
    category: [],
    categoryName: "",
    categoryId: "",

    //for showing images
    all_image_db: "",
    test: []
  }),

  methods: {
    onFileChange () {
      //show image preview on image select
    },
    parseImage (imageName) {
      return "https://pctool.herokuapp.com/product/" + imageName;
    },
    getStatus () {
      return this.status === "Active" ? "Y" : "N";
    },
    setStatus (status) {
      status === "Y" ? (this.status = "Active") : (this.status = "Not Active");
    },
    putData () {
      const form = new FormData();
      form.append("product_name", this.productName);
      form.append("product_code", this.sku);
      form.append("product_desc", this.productDescription);
      form.append("seourl", this.seoUrl);
      form.append("categoryId", this.categoryId);
      form.append("price", this.price);
      form.append("sellprice", this.sellPrice);
      form.append("availability", this.availability);
      form.append("featureproduct", this.featureProduct);
      form.append("status", this.status);

      // This is for apppending all files or images for multiple selection
      for (var i = 0; i < this.$refs.productimg.files.length; i++) {
        let file = this.$refs.productimg.files[i];
        console.log(file);
        form.append("productImage", file);
      }
      form.append("imageCount", this.$refs.productimg.files.length)

      /**this is for showing all form app */

      // for (var datax of form.entries()) {
      //   console.log(datax[0], "=>", datax[1]);
      // }
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
          console.log("error", error);
        });
    },
    getData () {
      this.$axios({
        url: "/monoproduct/" + this.$route.params.id,
        method: "get"
      })
        .then(res => {
          this.productId = res.data[0].productId;
          this.productName = res.data[0].product_name;
          this.sku = res.data[0].sku;
          this.productDescription = res.data[0].product_desc;
          this.seoUrl = res.data[0].seourl;
          this.getCategoryName(res.data[0].categoryId);
          this.price = res.data[0].price;
          this.sellPrice = res.data[0].sellprice;
          this.availability = res.data[0].availability;
          this.featureProduct = res.data[0].featureproduct;
          this.status = res.data[0].status;
          this.get_images_according_productid();
        })
        .catch(err => {
          // handle errorr
          console.log(err);
        });
    },
    //get all category names
    getCategoryNames () {
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

    //get seingle record of a category
    getCategoryName (catId) {
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

    //get category id against the name
    getCategoryId () {
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

    get_images_according_productid () {
      this.$axios({
        method: "GET",
        url: `/getimages/${this.productId}`
      })
        .then(res => {
          this.all_image_db = res.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted () {
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
</style>