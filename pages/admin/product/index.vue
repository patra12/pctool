<template>
  <v-container class="bv-example-row list pa-0">
    <v-row class="bg">
      <h4 class="font-weight-light">Product List</h4>
      <nuxt-link to="/admin/product/addProduct">
        <v-icon class="right" color="white darken-1" title="Add page"
          >mdi-plus-box</v-icon
        >
      </nuxt-link>
    </v-row>
    <v-row class="bg-content text-center">
      <div class="row w-100 ma-0">
        <v-col class="border">
          <b>#</b>
        </v-col>
        <v-col class="border">
          <b>Product Name</b>
        </v-col>
        <v-col class="border">
          <b>Price</b>
        </v-col>
        <v-col class="border">
          <b>Availavility</b>
        </v-col>
        <v-col class="border">
          <b>Action</b>
        </v-col>
      </div>
      <div v-for="(page, index) in pages" :key="index" class="row w-100 ma-0">
        <v-col class="border font-weight-light">{{ index + 1 }}</v-col>
        <v-col class="border font-weight-light">{{ page.product_name }}</v-col>
        <v-col class="border font-weight-light">{{ page.product_alias }}</v-col>
        <v-col class="border font-weight-light">{{ page.status }}</v-col>
        <v-col class="border">
          <!-- <nuxt-link to="./editProduct">-->
          <nuxt-link :to="'./editProduct/' + page.id">
            <v-icon title="Edit" color="purple darken-1">mdi-pencil</v-icon>
          </nuxt-link>
          <nuxt-link to="#">
            <v-icon
              @click="delete_data(page.id)"
              color="red darken-2"
              title="Delete"
              >mdi-close</v-icon
            >
          </nuxt-link>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Product',
  layout: 'admin/defaultAdmin',
  data() {
    return {
      pages: [
        {
          id: 1,
          product_name: 'test',
          product_alias: 'alias test',
          status: 'active'
        },
        {
          id: 2,
          product_name: 'test1',
          product_alias: 'alias test1',
          status: 'disabled'
        },
        {
          id: 3,
          product_name: 'test2',
          product_alias: 'alias test2',
          status: 'active'
        }
      ]
    }
  }
}
</script>
