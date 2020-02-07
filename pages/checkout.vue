<template>
  <div class="container">
    <div class="row">

      <div class="col-md-4 order-md-2 mb-4 ">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Shipping Address</span>
          <span class="badge badge-secondary badge-pill"></span>
        </h4>

        <form
          class="needs-validation"
          novalidate=""
        >
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="same-address"
            >
            <label
              class="custom-control-label"
              for="same-address"
            >Shipping address is the same as my billing address</label>
          </div>
          <div
            style="max-width: 100%;"
            class="col-md-6 mb-3"
          >
            <input
              type="text"
              class="form-control"
              id="ship_firstname"
              v-model="ship_firstname"
              name="ship_firstname"
              placeholder="First name"
              value=""
              required=""
            >
          </div>

          <div
            style="max-width: 100%;"
            class="col-md-6 mb-3"
          >
            <input
              type="text"
              class="form-control"
              id="ship_lastname"
              v-model="ship_lastname"
              placeholder="Last name"
              value=""
              required=""
            >
          </div>

          <div
            style="max-width: 100%;"
            class="col-md-6 mb-3"
          >
            <input
              type="text"
              class="form-control"
              id="ship_email"
              v-model="ship_email"
              placeholder="Email"
              value=""
              required=""
            >
          </div>

          <div
            style="max-width: 100%;"
            class="col-md-6 mb-3"
          >
            <input
              type="text"
              class="form-control"
              id="ship_address"
              v-model="ship_address"
              placeholder="Address"
              required=""
            >
          </div>

          <div
            style="max-width: 100%;"
            class="col-md-6 mb-3"
          >
            <input
              type="text"
              class="form-control"
              id="ship_city"
              v-model="ship_city"
              placeholder="City"
              required=""
            >
          </div>

          <!-- <div style="max-width: 100%;" class="col-md-6 mb-3">
          <input type="text" class="form-control" id="ship_state"  v-model="ship_state" placeholder="State" required="">
         </div> -->

          <div
            style="max-width: 100%;"
            class="col-md-6 mb-3"
          >
            <input
              type="text"
              class="form-control"
              id="ship_zipcode"
              v-model="ship_zipcode"
              placeholder="ZIP code"
              required=""
            >
          </div>

          <div
            style="max-width: 100%;"
            class="col-md-6 mb-3"
          >
            <input
              type="text"
              class="form-control"
              id="ship_country"
              v-model="ship_country"
              placeholder="Country"
              required=""
            >
          </div>

          <div
            style="max-width: 100%;"
            class="col-md-6 mb-3"
          >
            <input
              type="text"
              class="form-control"
              id="ship_phone"
              v-model="ship_phone"
              placeholder="Phone no"
              required=""
            >
          </div>
        </form>
      </div>
      <div class="vl"></div>

      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">Billing address</h4>
        <form
          class="needs-validation"
          novalidate=""
        >

          <div class="col-md-6 mb-3">
            <input
              type="text"
              class="form-control"
              id="bill_firstname"
              v-model="bill_firstname"
              placeholder="First name"
              value=""
              required=""
            >
          </div>

          <div class="col-md-6 mb-3">
            <input
              type="text"
              class="form-control"
              id="bill_lastname"
              v-model="bill_lastname"
              placeholder="Last name"
              value=""
              required=""
            >
          </div>

          <div
            style="max-width: 100%;"
            class="col-md-6 mb-3"
          >
            <input
              type="text"
              class="form-control"
              id="bill_email"
              v-model="bill_email"
              placeholder="Email"
              value=""
              required=""
            >
          </div>

          <div class="col-md-6 mb-3">
            <input
              type="text"
              class="form-control"
              id="bill_address"
              v-model="bill_address"
              placeholder="Address"
              required=""
            >
          </div>

          <div class="col-md-6 mb-3">
            <input
              type="text"
              class="form-control"
              id="bill_city"
              v-model="bill_city"
              placeholder="City"
              required=""
            >
          </div>

          <!-- <div class="col-md-6 mb-3">
          <input type="text" class="form-control" id="bill_state" v-model="bill_state" placeholder="State" required="">
         </div> -->

          <div class="col-md-6 mb-3">
            <input
              type="text"
              class="form-control"
              id="bill_zipcode"
              v-model="bill_zipcode"
              placeholder="ZIP code"
              required=""
            >
          </div>

          <div class="col-md-6 mb-3">
            <input
              type="text"
              class="form-control"
              id="bill_country"
              v-model="bill_country"
              placeholder="Country"
              required=""
            >
          </div>

          <div class="col-md-6 mb-3">
            <input
              type="text"
              class="form-control"
              id="bill_phone"
              v-model="bill_phone"
              placeholder="Phone no"
              required=""
            >
          </div>

          <hr class="mb-4">
          <h4 class="mb-3">Order Summary</h4>
          <ul class="list-group mb-3">
            <li class="list-group d-flex justify-content-between lh-condensed">

              <div style="padding: 7px;">
                <h5 class="my-0">Product name</h5>
              </div>

              <div style="padding: 7px;">
                <h5 class="my-0">Quantity</h5>
              </div>

              <div style="padding: 7px;">
                <h5 class="my-0">Price</h5>
              </div>

            </li>
            <li
              class="list-group d-flex justify-content-between lh-condensed"
              v-for="(cart, index) in cartData"
              :key="index"
            >

              <div style="padding: 7px;">
                <small class="text-muted">{{cart.product_name}}</small>
              </div>

              <div style="padding: 7px;">
                <small class="text-muted">1</small>
              </div>

              <div style="padding: 7px;">
                <small class="text-muted">${{cart.price}}</small>
              </div>

            </li>
            <li
              v-for="(tot,index) in total"
              class="list-group d-flex justify-content-between lh-condensed"
              :key="index"
            >
              <div style="padding: 7px; margin-right: 109px;">
                <h5 class="my-0">Sub Total :</h5>
              </div>
              <div style="padding: 7px;">
                <h5 class="my-0">${{tot.price*tot.total}}.00</h5>
              </div>
            </li>
            <li class="list-group d-flex justify-content-between lh-condensed">
              <div style="padding: 7px; margin-right: 65px;">
                <h5 class="my-0">Shipping charge :</h5>
              </div>
              <div style="padding: 7px;">
                <h5 class="my-0">$10</h5>
              </div>
            </li>
            <li
              v-for="(tot,index) in total"
              class="list-group d-flex justify-content-between lh-condensed"
              :key="index"
            >
              <div style="padding: 7px; margin-right: 100px;">
                <h5 class="my-0">Grand Total :</h5>
              </div>
              <div style="padding: 7px;">
                <h5 class="my-0">${{tot.price*tot.total+10}}.00</h5>
              </div>
            </li>
          </ul>
          <hr class="mb-4">
          <v-btn
            @click="addData()"
            style="background-color:red"
            class="btn btn-primary btn-block"
          >Pay With PAYPAL</v-btn>

        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: "",
      cartData: "",
      delTemp: "",
      total: "",
      dialog: false,
      snack: false,
      timeout: 1000,
      bill_userId: "",
      bill_firstname: "",
      bill_lastname: "",
      bill_email: "",
      bill_address: "",
      bill_city: "",
      bill_zipcode: "",
      bill_phone: "",
      bill_country: "",
      //for shipping
      ship_userId: "",
      ship_firstname: "",
      ship_lastname: "",
      ship_email: "",
      ship_address: "",
      ship_city: "",
      ship_zipcode: "",
      ship_phone: "",
      ship_country: "",
      //for order
      order_userId: "",
      order_amt: "",
      shippingcost: "",
      order_grand_total: "",
      sub_total: "",
      grand_total: ""

    };
  },
  methods: {
    getData (id) {
      this.$axios({
        method: "GET",
        //url: "/getDataCartpage"
        url: `/getDataCartpage/${this.$session.id()}`
      })
        .then(res => {
          this.cartData = res.data;
          console.log("cartData", this.cartData);

        })
        .catch(err => {
          console.log(err);
        });
    },
    // for count total price in cart page
    getTotalData (id) {
      this.$axios({
        method: "GET",
        url: `/gettotaldata/${this.$session.id()}`
      })
        .then(res => {
          this.total = res.data;
          this.sub_total = res.data[0].price;
          console.log("total11", this.total);
          console.log("sub total", this.sub_total);
        })
        .catch(err => {
          console.log(err);
        });
    },
    addData () {
      this.$axios({
        method: "POST",
        url: "/addnewOrder",
        data: {
          //for billing
          bill_userId: 34,
          bill_firstname: this.bill_firstname,
          bill_lastname: this.bill_lastname,
          bill_email: this.bill_email,
          bill_address: this.bill_address,
          bill_city: this.bill_city,
          bill_zipcode: this.bill_zipcode,
          bill_phone: this.bill_phone,
          bill_country: this.bill_country,
          //for shipping
          ship_userId: 34,
          ship_firstname: this.ship_firstname,
          ship_lastname: this.ship_lastname,
          ship_email: this.ship_email,
          ship_address: this.ship_address,
          ship_city: this.ship_city,
          ship_zipcode: this.ship_zipcode,
          ship_phone: this.ship_phone,
          ship_country: this.ship_country,
          //for order
          order_userId: 34,
          order_amt: this.sub_total,
          shippingcost: 10,
          order_grand_total: this.sub_total
        }
      })
        .then(res => {
          console.log("data inserted");
          this.$router.push("thankyou");
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  mounted () {
    this.getData();
    this.getTotalData();
  }
}
</script> 
<style>
.vl {
  border-left: 1px solid gray;
  height: 480px;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 300px;
}
</style>