<template>
  <div class="container">
    <div class="row">

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
          <input type="checkbox" value="" name="filltoo" id="filltoo" @click="filladd()" />Shipping address is the same as my billing address   <br/>

          <!-- <v-btn
            @click="filladd()" name="filltoo" id="filltoo"
            class="btn-primary"
          >check</v-btn> -->
          <div
            class="col-md-6 mb-3 ship_width"
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
            class="col-md-6 mb-3 ship_width"
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
            class="col-md-6 mb-3 ship_width"
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
            class="col-md-6 mb-3 ship_width"
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
            class="col-md-6 mb-3 ship_width"
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
            class="col-md-6 mb-3 ship_width"
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
            class="col-md-6 mb-3 ship_width"
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
            class="col-md-6 mb-3 ship_width"
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
                <small class="text-muted order_sum">1</small>
              </div>
              <div>
                <small class="text-muted order_sum">${{cart.price}}</small>
              </div>
            </li>
            <li
              v-for="(tot,index) in total"
              class="d-flex justify-content-between lh-condensed"
              :key="index+1"
            >
              <div>
                <p class="sub_tot">Sub Total :</p>
              </div>
              <div class="sub_calculate">
                <p class="sub_tot_price">${{tot.price*tot.total}}.00</p>
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
            <li
              v-for="(tot,index) in total"
              class="d-flex justify-content-between lh-condensed"
              :key="index+2"
            >
              <div>
                <p class="sub_tot">Grand Total :</p>
              </div>
              <div>
                <p class="sub_tot_price">${{tot.price*tot.total+10}}.00</p>
              </div>
            </li>
          </ul>
          <hr class="mb-4">
          <v-btn
            @click="addData()"
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
    filladd(){
	 if(filltoo.checked == true) 
     {
      var bill_firstname11 =document.getElementById("bill_firstname").value;
			var bill_lastname11 =document.getElementById("bill_lastname").value;
      var bill_email11 =document.getElementById("bill_email").value;
      var bill_address11 =document.getElementById("bill_address").value;
      var bill_city11 =document.getElementById("bill_city").value;
      var bill_zipcode11 =document.getElementById("bill_zipcode").value;
      var bill_phone11 =document.getElementById("bill_phone").value;
      var bill_country11 =document.getElementById("bill_country").value;
        
            var copybill_firstname =bill_firstname11 ;
            var copybill_lastname =bill_lastname11 ;
            var copybill_email =bill_email11 ;
            var copybill_address =bill_address11 ;
            var copybill_city =bill_city11 ;
            var copybill_zipcode =bill_zipcode11 ;
            var copybill_phone =bill_phone11 ;
            var copybill_country =bill_country11 ;

            document.getElementById("ship_firstname").value = copybill_firstname;
            document.getElementById("ship_lastname").value = copybill_lastname;
            document.getElementById("ship_email").value = copybill_email;
            document.getElementById("ship_address").value = copybill_address;
            document.getElementById("ship_city").value = copybill_city;
            document.getElementById("ship_zipcode").value = copybill_zipcode;
            document.getElementById("ship_phone").value = copybill_phone;
            document.getElementById("ship_country").value = copybill_country;
	 }
	 else if(filltoo.checked == false)
	 {
        document.getElementById("ship_firstname").value='';
        document.getElementById("ship_lastname").value='';
        document.getElementById("ship_email").value='';
        document.getElementById("ship_address").value='';
        document.getElementById("ship_city").value='';
        document.getElementById("ship_zipcode").value='';
        document.getElementById("ship_phone").value='';
        document.getElementById("ship_country").value='';
	 }
},
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
 