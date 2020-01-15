<template>
  <v-container class="bv-example-row list pa-0">
    <v-row class="bg">
      <h4 class="font-weight-light">Detailse view</h4>
      <nuxt-link to="/admin/order">
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
          <b>Product Name</b>
        </v-col>
        <v-col sm="9" class="border font-weight-light text-left">{{product_name}}</v-col>
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
        <v-col sm="9" class="border font-weight-light text-left">{{quantity}}</v-col>
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
      product_name: "",
      order_status: "",
      order_amount: "",
      quantity: "",
      shipping_cost: "",
      packging_fee: "",
      discount: "",
      grand_total: "",
      payment_status: ""
    };
  },
  methods: {
    get_order_detailse() {
      this.$axios({
        url: "/orderdetailse/" + this.$route.params.id,
        mothod: "GET"
      })
        .then(row => {
          console.log(row);
          this.user_name = row.data[0].user_name;
          this.phone = row.data[0].phone;
          this.email = row.data[0].email;
          this.order_id = row.data[0].orderId;
          this.order_date = row.data[0].order_date;
          this.product_name = row.data[0].product_name;
          this.order_status = row.data[0].order_status;
          this.order_amount = row.data[0].order_amt;
          this.quantity = row.data[0].quantity;
          this.shipping_cost = row.data[0].shippingcost;
          this.packging_fee = row.data[0].packagingfee;
          this.discount = row.data[0].order_discount;
          this.grand_total = row.data[0].order_grand_total;
          this.payment_status = row.data[0].payment_status;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.get_order_detailse();
  }
};
</script>