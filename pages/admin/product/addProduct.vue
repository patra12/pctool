<template>
  <div>
    <v-row class="form pt-0">
      <v-col class="pt-0">
        <v-row>
          <v-col outlined class="head">
            <h4 class="font-weight-light text-light">Add Product</h4>
            <nuxt-link to="/admin/product">
              <v-icon title="back" class="right" color="white darken-1"
                >mdi-arrow-left-bold</v-icon
              >
            </nuxt-link>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="bg-content">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="productName"
                label="Product Name"
              ></v-text-field>

              <v-text-field
                v-model="productCode"
                label="Product Code"
              ></v-text-field>

              <p class="grey--text text--darken-1 pt-3 mb-0">
                Product Description
              </p>

              <div
                v-model="categoryDescription"
                v-quill:product=""
                class="quill-editor"
              ></div>

              <v-text-field v-model="seoUrl" label="seo URL"></v-text-field>

              <v-text-field v-model="price" label="price"></v-text-field>

              <v-text-field
                v-model="sellPrice"
                label="Sell Price"
              ></v-text-field>

              <v-text-field
                v-model="sellQuantity"
                label="Sell Quantity"
                type="number"
              ></v-text-field>

              <v-select
                v-model="availability"
                :items="availabilityVal"
                label="Availability"
              ></v-select>

              <p class="grey--text text--darken-1 pt-3 mb-0">Return Policy</p>

              <v-radio-group v-model="returnPolicy" row>
                <v-radio label="Yes" value="Yes"></v-radio>
                <v-radio label="No" value="No"></v-radio>
              </v-radio-group>

              <v-text-field
                v-model="stoneName"
                label="Stone Name"
              ></v-text-field>

              <v-text-field v-model="plating" label="Plating"></v-text-field>

              <v-text-field
                v-model="colorCode"
                label="Color Code"
              ></v-text-field>

              <v-text-field
                v-model="collectionName"
                label="Collection Name "
              ></v-text-field>

              <v-text-field
                v-model="featureProduct"
                label="Feature Product"
              ></v-text-field>

              <v-text-field v-model="addedOn" label="Added On"></v-text-field>

              <v-text-field
                v-model="displayOrder"
                type="number"
                label="Display Order"
              ></v-text-field>

              <v-select
                v-model="status"
                :items="items"
                label="Status"
              ></v-select>

              <v-btn
                @click="addData()"
                class="my-5 float-right"
                large
                color="primary"
                >Save</v-btn
              >
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'AddPages',
  layout: 'admin/defaultAdmin',
  data: () => ({
    valid: true,
    productName: '',
    productCode: '',
    categoryDescription: '',
    seoUrl: '',
    price: '',
    sellPrice: '',
    sellQuantity: '',
    availability: '',
    returnPolicy: '',
    stoneName: '',
    plating: '',
    colorCode: '',
    collectionName: '',
    featureProduct: '',
    addedOn: '',
    displayOrder: '',
    status: '',

    /* form static select data */

    items: ['Active', 'Not Active'],

    availabilityVal: ['Available', 'Not Available']
  }),

  methods: {
    onFileChange() {
      const file = this.$refs.image.files[0]
      this.categoryImage = file
    },
    addData() {
      const form = new FormData()
      form.append('product_name', this.product_name)
      form.append('product_alias', this.product_alias)
      form.append('product_description', this.product_description)
      form.append('feature_benefitas', this.feature_benefitas)
      form.append('feature_description', this.feature_description)
      form.append('price', this.price)
      form.append('image', this.image)
      form.append('meta_title', this.meta_title)
      form.append('meta_description', this.meta_description)
      form.append('meta_keywords', this.meta_keywords)
      form.append('pdf_name', this.pdf_name)
      // axios({
      //   url: ' /addproduct',
      //   method: 'POST',
      //   headers: {
      //     header: { 'Content-Type': 'multipart/form-data' }
      //   },
      //   data: form
      // })
      //   .then((res) => {
      //     this.$router.push({
      //       path: '/admin/product/productlist'
      //     })
      //   })
      //   .catch((error) => {
      //     // handle error
      //     console.log(error)
      //   })
    }
  }
}
</script>
