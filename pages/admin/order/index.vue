<template>
  <v-container class="bv-example-row list pa-0">
    <v-row class="bg">
      <h4 class="font-weight-light">Order List</h4>
    </v-row>
    <v-row class="bg-content text-center">
      <div class="row w-100 ma-0">
        <v-col class="border">
          <b>#</b>
        </v-col>
        <v-col class="border">
          <b>User Name</b>
        </v-col>
        <v-col class="border">
          <b>Product Name</b>
        </v-col>
        <v-col class="border">
          <b>Quantity</b>
        </v-col>
        <v-col class="border">
          <b>Action</b>
        </v-col>
      </div>
      <div v-for="(order, index) in orders" :key="index" class="row w-100 ma-0">
        <v-col class="border font-weight-light">{{ index + 1 }}</v-col>
        <v-col class="border font-weight-light">{{ order.name }}</v-col>
        <v-col class="border font-weight-light">{{ order.product_name }}</v-col>
        <v-col class="border font-weight-light">{{ order.Quentity }}</v-col>
        <v-col class="border">
          <!-- <nuxt-link to="./editProduct">-->
          <nuxt-link :to="'/admin/order/view/' + order.orderId">
            <v-icon title="View" color="purple darken-1">mdi-eye</v-icon>
          </nuxt-link>
          <nuxt-link to="#">
            <v-icon
              @click="delete_data(order.orderId)"
              color="red darken-2"
              title="Delete"
            >mdi-close</v-icon>
          </nuxt-link>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Orders",
  layout: "admin/defaultAdmin",
  data() {
    return {
      pages: [
        {
          id: 1,
          product_name: "test",
          product_alias: "alias test",
          status: "active"
        },
        {
          id: 2,
          product_name: "test1",
          product_alias: "alias test1",
          status: "disabled"
        },
        {
          id: 3,
          product_name: "test2",
          product_alias: "alias test2",
          status: "active"
        }
      ],
      orders: ""
    };
  },
  methods: {
    getOrderDetails() {
      this.$axios({
        method: "GET",
        url: "/orders"
      }).then(row => {
        this.orders = row.data;
        console.log(this.orders);
      });
    },
    deldata(id) {
      console.log(id);
    }
  },
  mounted() {
    this.getOrderDetails();
  }
};
</script>
