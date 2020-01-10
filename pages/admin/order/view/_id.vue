<template>
  <v-container class="bv-example-row list pa-0">
    <v-row class="bg">
      <h4 class="font-weight-light">Detailse view</h4>
      <nuxt-link to="/admin/category">
        <v-icon title="back" class="right" color="white darken-1">mdi-arrow-left-bold</v-icon>
      </nuxt-link>
    </v-row>
    <v-row class="bg-content text-center">
      <div class="row w-100 ma-0">
        <v-col sm="3" class="border font-weight-light">
          <b>User Name</b>
        </v-col>
        <v-col sm="9" class="border font-weight-light text-left">{{user_name}}</v-col>
      </div>
      <div class="row w-100 ma-0">
        <v-col sm="3" class="border font-weight-light">
          <b>Phone</b>
        </v-col>
        <v-col sm="9" class="border font-weight-light text-left">{{phone}}</v-col>
      </div>
      <div class="row w-100 ma-0">
        <v-col sm="3" class="border font-weight-light">
          <b>Email</b>
        </v-col>
        <v-col sm="9" class="border font-weight-light text-left">{{email}}</v-col>
      </div>
      <div class="row w-100 ma-0">
        <v-col sm="3" class="border font-weight-light">
          <b>Order Id</b>
        </v-col>
        <v-col sm="9" class="border font-weight-light text-left">{{order_id}}</v-col>
      </div>
      <div class="row w-100 ma-0">
        <v-col sm="3" class="border font-weight-light">
          <b>Order Date</b>
        </v-col>
        <v-col sm="9" class="border font-weight-light text-left">{{order_date}}</v-col>
      </div>
      <div class="row w-100 ma-0">
        <v-col sm="3" class="border font-weight-light">
          <b>Order Status</b>
        </v-col>
        <v-col sm="9" class="border font-weight-light text-left">{{order_status}}</v-col>
      </div>
      <div class="row w-100 ma-0">
        <v-col sm="3" class="border font-weight-light">
          <b>Order amount</b>
        </v-col>
        <v-col sm="9" class="border font-weight-light text-left">{{order_amount}}</v-col>
      </div>
      <div class="row w-100 ma-0">
        <v-col sm="3" class="border font-weight-light">
          <b>Quentity</b>
        </v-col>
        <v-col sm="9" class="border font-weight-light text-left">{{quentity}}</v-col>
      </div>

      <div class="row w-100 ma-0">
        <v-col sm="3" class="border font-weight-light">
          <b>Shipping Cost</b>
        </v-col>
        <v-col sm="9" class="border font-weight-light text-left">{{shipping_cost}}</v-col>
      </div>
      <div class="row w-100 ma-0">
        <v-col sm="3" class="border font-weight-light">
          <b>Packging Fee</b>
        </v-col>
        <v-col sm="9" class="border font-weight-light text-left">{{packging_fee}}</v-col>
      </div>
      <!-- <div class="row w-100 ma-0">
        <v-col sm="3" class="border font-weight-light">
          <b>Packging Fee</b>
        </v-col>
        <v-col sm="9" class="border font-weight-light text-left">{{abc}}</v-col>
      </div>-->
      <div class="row w-100 ma-0">
        <v-col sm="3" class="border font-weight-light">
          <b>Discount</b>
        </v-col>
        <v-col sm="9" class="border font-weight-light text-left">{{discount}}</v-col>
      </div>
      <div class="row w-100 ma-0">
        <v-col sm="3" class="border font-weight-light">
          <b>Grand Total</b>
        </v-col>
        <v-col sm="9" class="border font-weight-light text-left">{{grand_total}}</v-col>
      </div>
      <div class="row w-100 ma-0">
        <v-col sm="3" class="border font-weight-light">
          <b>Payment Status</b>
        </v-col>
        <v-col sm="9" class="border font-weight-light text-left">{{payment_status}}</v-col>
      </div>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "OrderDetailse",
  layout: "admin/defaultAdmin",
  data() {
    return {
      user_name: "",
      phone: "",
      email: "",
      order_id: "",
      order_date: "",
      order_status: "",
      order_amount: "",
      quentity: "",
      shipping_cost: "",
      packging_fee: "",
      discount: "",
      grand_total: "",
      payment_status: ""
    };
  },
  methods: {
    get_order_detailse()
  },
  mounted() {}
};
</script>