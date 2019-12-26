<template>
  <div>
    <v-row class="form pt-0">
      <v-col class="pt-0">
        <v-row>
          <v-col outlined class="head">
            <h4 class="font-weight-light text-light">Add Product</h4>
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

              <p class="grey--text text--darken-1 pt-3 mb-0">Return Policy</p>

              <v-radio-group v-model="returnPolicy" class="mt-0" row>
                <v-radio label="Yes" value="Y"></v-radio>
                <v-radio label="No" value="N"></v-radio>
              </v-radio-group>

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
              <!-- <v-select v-model="imgstatus" :items="items" label="Image Status"></v-select> -->
              <p class="grey--text text--darken-1 pt-3 mb-0">Image Status</p>
              <v-radio-group v-model="imgstatus" class="mt-0" row>
                <v-radio label="Active" value="Y"></v-radio>
                <v-radio label="Not Active" value="N"></v-radio>
              </v-radio-group>
              <v-col class="borer pa-0 px-2">
                <!-- <v-row>
                  <v-col class="border">Image location</v-col>
                  <v-col class="border">Caption</v-col>
                  <v-col class="border">Status</v-col>
                  <v-col class="border">
                    Is Primary
                    <v-btn color="warning" @click="statusarr()">add</v-btn>
                  </v-col>
                </v-row>-->
                <!-- ++++++++++++++++++++ -->
                <!-- <v-row>
                  <v-col class="border">
                    <input type="file" name="filename" ref="image" @change="onFileChange" />
                  </v-col>
                  <v-col class="border">
                    <v-text-field v-model="displayOrder" label="Image Caption"></v-text-field>
                  </v-col>
                  <v-col class="border">
                    <v-select v-model="imagestatus" :items="items" label="image Status"></v-select>
                  </v-col>
                  <v-col class="border">
                    <v-select v-model="isPrimary" :items="items" label="image is primary"></v-select>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="border">
                    <input type="file" name="filename" ref="image1" @change="onFileChange" />
                  </v-col>
                  <v-col class="border">
                    <v-text-field v-model="displayOrder" label="Image Caption"></v-text-field>
                  </v-col>
                  <v-col class="border">
                    <v-select v-model="imagestatus" :items="items" label="image Status"></v-select>
                  </v-col>
                  <v-col class="border">
                    <v-select v-model="isPrimary" :items="items" label="image is primary"></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="border">
                    <input type="file" name="filename" ref="image2" @change="onFileChange" />
                  </v-col>
                  <v-col class="border">
                    <v-text-field v-model="displayOrder" label="Image Caption"></v-text-field>
                  </v-col>
                  <v-col class="border">
                    <v-select v-model="imagestatus" :items="items" label="image Status"></v-select>
                  </v-col>
                  <v-col class="border">
                    <v-select v-model="isPrimary" :items="items" label="image is primary"></v-select>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="border">
                    <input type="file" name="filename" ref="image3" @change="onFileChange" />
                  </v-col>
                  <v-col class="border">
                    <v-text-field label="Image Caption" ref="status3" @change="statusarr"></v-text-field>
                  </v-col>
                  <v-col class="border">
                    <v-select v-model="imagestatus" :items="items" label="image Status"></v-select>
                  </v-col>
                  <v-col class="border">
                    <v-select v-model="isPrimary" :items="items" label="image is primary"></v-select>
                  </v-col>
                </v-row>-->

                <!-- +++++++++++++++ -->
              </v-col>
              <v-btn @click="addData()" class="my-5 float-right" large color="primary">Save</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
var statusx = [];
export default {
  name: "AddPages",
  layout: "admin/defaultAdmin",
  data: () => ({
    valid: true,
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

    statusx: [],
    productImage: "",
    isPrimary: "",
    imgstatus: "",
    category: [],
    categoryName: "",
    categoryId: "",
    image: ""
  }),

  methods: {
    onFileChange() {
      var file = this.$refs.productimg.files;
      this.image = file;
    },
    addData() {
      const form = new FormData();
      form.append("product_name", this.productName);
      form.append("product_code", this.productCode);
      form.append("product_desc", this.productDescription);
      form.append("seourl", this.seoUrl);
      form.append("ptype", this.ptype);
      form.append("price", this.price);
      form.append("sellprice", this.sellPrice);
      form.append("availability", this.availability);
      form.append("sellingqnt", this.sellingQuantity);
      form.append("returnpolicy", this.returnPolicy);
      form.append("stonename", this.stoneName);
      form.append("plating", this.plating);
      form.append("colorcode", this.colorCode);
      form.append("collectionname", this.collectionName);
      form.append("displayorder", this.displayOrder);
      form.append("featureproduct", this.featureProduct);
      form.append("status", this.status);
      form.append("categoryId", this.categoryId);
      // form.append("images", imagex);
      form.append("imgstatus", this.imgstatus);

      for (var i = 0; i < this.$refs.productimg.files.length; i++) {
        let file = this.$refs.productimg.files[i];
        console.log(file);
        form.append("productImage", file);
      }

      // for (var datax of form.entries()) {
      //   console.log(datax[0], "=>", datax[1]);
      // }

      this.$axios({
        url: "/addproduct",
        method: "POST",
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
          console.log(this.categoryId);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCategoryNames();
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