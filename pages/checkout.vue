<template>
  <div class="container">
    <div class="row">
      <!-- shiping form start comented by sp -->
      <div class="col-md-4 order-md-2 mb-4 ">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span>Shipping Address</span>
          <span class="badge badge-secondary badge-pill"></span>
        </h4>

        <form
          class="needs-validation"
          novalidate=""
        >
          <!-- <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              value="" name="filltoo" id="filltoo" @click="filladd()"
            >
            <label
              class="custom-control-label"
              for="same-address"
            >Shipping address is the same as my billing address</label>
          </div> -->
          <input
            type="checkbox"
            value=""
            name="filltoo"
            id="filltoo"
            @click="filladd()"
          />Shipping address is the same as my billing address <br />

          <!-- <v-btn
            @click="filladd()" name="filltoo" id="filltoo"
            class="btn-primary"
          >check</v-btn> -->
          <div class="col-md-6 mb-3 ship_width">
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

          <div class="col-md-6 mb-3 ship_width">
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

          <div class="col-md-6 mb-3 ship_width">
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

          <div class="col-md-6 mb-3 ship_width">
            <input
              type="text"
              class="form-control"
              id="ship_address"
              v-model="ship_address"
              placeholder="Address"
              required=""
            >
          </div>

          <div class="col-md-6 mb-3 ship_width">
            <input
              type="text"
              class="form-control"
              id="ship_city"
              v-model="ship_city"
              placeholder="City"
              required=""
            >
          </div>

          <div class="col-md-6 mb-3 ship_width">
            <input
              type="text"
              class="form-control"
              id="ship_zipcode"
              v-model="ship_zipcode"
              placeholder="ZIP code"
              required=""
            >
          </div>

          <div class="col-md-6 mb-3 ship_width">
            <input
              type="text"
              class="form-control"
              id="ship_country"
              v-model="ship_country"
              placeholder="Country"
              required=""
            >
          </div>

          <div class="col-md-6 mb-3 ship_width">
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
      <!-- End of shiping comented by sp -->

      <!-- Billing form start comented by sp -->
      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">Billing Address</h4>
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

          <div class="col-md-6 mb-3">
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
          <!-- End of Billing comented by sp -->
          <hr class="mb-4">
          <h4 class="mb-3">Order Summary</h4>
          <ul class="list-group mb-3">
            <li class="d-flex justify-content-between lh-condensed">
              <div>
                <h5 class="my-0">Product name</h5>
              </div>
              <div>
                <h5 class="my-0 order_sum">Quantity</h5>
              </div>
              <div>
                <h5 class="my-0 order_sum">Price</h5>
              </div>
            </li>
            <li
              class=" d-flex justify-content-between lh-condensed"
              v-for="(cart, index) in cartData"
              :key="index"
            >
              <div>
                <small class="text-muted">{{cart.product_name}}</small>
              </div>
              <div>
                <small class="text-muted order_sum">{{cart.qty}}</small>
              </div>
              <div>
                <small class="text-muted order_sum">${{cart.price * cart.qty}}</small>
              </div>
            </li>
            <li class="d-flex justify-content-between lh-condensed">
              <div>
                <p class="sub_tot">Sub Total :</p>
              </div>
              <div class="sub_calculate">
                <p class="sub_tot_price">${{totalprice}}.00</p>
              </div>
            </li>
            <li class="d-flex justify-content-between lh-condensed">
              <div class="sub_calculate">
                <p class="sub_tot">Shipping charge :</p>
              </div>
              <div>
                <p class="shipping_charge">$10</p>
              </div>
            </li>
            <li class="d-flex justify-content-between lh-condensed">
              <div>
                <p class="sub_tot">Grand Total :</p>
              </div>
              <div>
                <p class="sub_tot_price">${{totalprice+10}}.00</p>
              </div>
            </li>
          </ul>

          <hr class="mb-4">
          <v-btn
            @click="addData(),flushData()"
            class="btn-primary"
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
      totalprice: 0,
      id: "",
      cartData: "",
      delTemp: "",
      total: "",
      dialog: false,
      snack: false,
      timeout: 1000,
      //for billing
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

    //for checkbox click same address billing and shipping
    filladd () {
      if (filltoo.checked == true) {
        this.ship_firstname = this.bill_firstname;
        this.ship_lastname = this.bill_lastname;
        this.ship_email = this.bill_email;
        this.ship_address = this.bill_address;
        this.ship_city = this.bill_city;
        this.ship_zipcode = this.bill_zipcode;
        this.ship_country = this.bill_country;
        this.ship_phone = this.bill_phone;
      }
      else if (filltoo.checked == false) {
        this.ship_firstname = "";
        this.ship_lastname = "";
        this.ship_email = "";
        this.ship_address = "";
        this.ship_city = "";
        this.ship_zipcode = "";
        this.ship_country = "";
        this.ship_phone = "";
      }
    },
    getData (id) {
      this.$axios({
        method: "GET",
        url: `/getDataCartpage/${this.$session.id()}`
      })
        .then(res => {
          this.cartData = res.data;
          for (let i in res.data) {
            this.totalprice += res.data[i].price * res.data[i].qty
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getTotalData (id) {
      this.$axios({
        method: "GET",
        url: `/gettotaldata/${this.$session.id()}`
      })
        .then(res => {
          this.total = res.data[0].total;
          let qty = res.data[0].qty;
          this.price = res.data[0].price * qty;
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
          bill_userId: this.$session.get('userId'),
          bill_firstname: this.bill_firstname,
          bill_lastname: this.bill_lastname,
          bill_email: this.bill_email,
          bill_address: this.bill_address,
          bill_city: this.bill_city,
          bill_zipcode: this.bill_zipcode,
          bill_phone: this.bill_phone,
          bill_country: this.bill_country,
          //for shipping
          ship_userId: this.$session.get('userId'),
          ship_firstname: this.ship_firstname,
          ship_lastname: this.ship_lastname,
          ship_email: this.ship_email,
          ship_address: this.ship_address,
          ship_city: this.ship_city,
          ship_zipcode: this.ship_zipcode,
          ship_phone: this.ship_phone,
          ship_country: this.ship_country,
          //for order
          order_userId: this.$session.get('userId'),
          order_amt: this.totalprice,
          shippingcost: 10,
          order_grand_total: this.totalprice + 10
        }
      })
        .then(res => {
          window.location.replace("/thankyou");
        })
        .catch(err => {
          console.log(err);
        });
    },
    flushData () {
      this.dialog = false;
      this.$axios({
        method: "DELETE",
        url: `/flushData/${this.$session.id()}`
      })
        .then(res => {
          this.delTemp = res.data;
          //this.$router.go("/thankyou");
          window.location.replace("/thankyou");
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
 