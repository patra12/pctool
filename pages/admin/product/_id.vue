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

              <v-text-field v-model="sellQuantity" label="Sell Quantity" type="number"></v-text-field>

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
var imagex = [];
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
    sellQuantity: "",
    availability: "",
    returnPolicy: "",
    stoneName: "",
    plating: "",
    colorCode: "",
    collectionName: "",
    featureProduct: "",
    addedOn: "",
    displayOrder: "",
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
      form.append("productName", this.product_name);
      form.append("seourl", this.seoUrl);
      form.append("description", this.categoryDescription);
      form.append("metatitle", this.metaTitle);
      form.append("metakeywords", this.metaKeyword);
      form.append("metadescription", this.metaDescription);
      form.append("categoryimage", this.categoryImage);
      form.append("bannerimageloc", this.bannerImageLoc);
      form.append("displayorder", this.displayOrder);
      form.append("status", this.getStatus());
      // form.append("pdf_name", this.pdf_name);
      for (var datax of form.entries()) {
        console.log(datax[0], "=>", datax[1]);
      }
      this.$axios({
        url: "/putcategory/" + this.$route.params.id,
        method: "PUT",
        headers: {
          header: { "Content-Type": "multipart/form-data" }
        },
        data: form
      })
        .then(res => {
          this.$router.push({
            path: "/admin/category"
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
          this.productName = res.data[0].categoryname;
          this.seoUrl = res.data[0].seourl;
          this.categoryDescription = res.data[0].description;
          this.metaTitle = res.data[0].metatitle;
          this.metaKeyword = res.data[0].metakeywords;
          this.metaDescription = res.data[0].metadescription;
          this.categoryImage = res.data[0].categoryimage;
          this.bannerImageLoc = res.data[0].bannerimageloc;
          this.displayOrder = res.data[0].displayorder;
          this.setStatus(res.data[0].status);
        })
        .catch(err => {
          // handle error
          console.log(err);
        });
    }
  },
  mounted() {
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