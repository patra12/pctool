<template>
  <div>
    <div class="container">
      <div class="card shopping-cart">
        <div class="card-header text-light">
          <i
            class="fa fa-shopping-cart"
            aria-hidden="true"
          ></i>
          Shipping cart
          <a
            href
            class="btn btn-info btn-sm btnBuy pull-right"
          >Continiu shopping</a>
          <div class="clearfix"></div>
        </div>
        <div class="card-body">
          <!-- PRODUCT -->
          <div
            class="row"
            v-for="(cart, index) in cartData"
            :key="index"
          >
            <div class="col-12 col-sm-12 col-md-2 text-center">
              <img
                class="img-responsive"
                src="http://placehold.it/120x80"
                alt="prewiew"
                width="120"
                height="80"
              />
            </div>
            <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6 productInfo">
              <h4 class="product-name">
                <strong>{{cart.product_name}}</strong>
              </h4>
              <h4>
                <small v-html="cart.product_desc"></small>
              </h4>
            </div>
            <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
              <div class="col-3 col-sm-3 col-md-6 text-right exactPrice">
                <h6>
                  <strong>
                    <span>{{cart.price}}</span>
                    <span>.00</span>
                  </strong>
                </h6>
              </div>
              <div class="col-4 col-sm-4 col-md-4">
                <div class="quantity">
                  <input
                    type="button"
                    value="+"
                    class="plus"
                  />
                  <input
                    type="number"
                    step="1"
                    max="99"
                    min="1"
                    value="1"
                    title="Qty"
                    class="qty"
                    size="4"
                  />
                  <input
                    type="button"
                    value="-"
                    class="minus"
                  />
                </div>
              </div>
              <div class="col-2 col-sm-2 col-md-2 text-right">
                <button
                  type="button"
                  @click="setId(cart.tempId)"
                  class="btn btn-outline-danger btn-xs"
                >
                  <i class="mdi mdi-delete"></i>
                </button>
              </div>
            </div>
          </div>
          <hr />

          <div class="row">
            <div class="col-md-6">
              <div class="coupon">
                <div class="row">
                  <div class="col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="cupone code"
                    />
                  </div>
                  <div class="col-6">
                    <input
                      type="submit"
                      class="btn btn-default"
                      value="Use cupone"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="pull-right">
                <a
                  href
                  class="btn btn-outline-info pull-right"
                >Update shopping cart</a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div
            class="pull-right"
            style="margin: 10px"
          >
            <!-- <nuxt-link
              to="/signin"
              class="btn btn-info pull-right btnBuy" @click="nextPage()"
            >Checkout</nuxt-link> -->
            <div @click="nextPage()" class="btn btn-info pull-right btnBuy">Checkout</div>
            <div
              style="margin: 5px"
              v-for="(tot,index) in total"
              class="pull-right"
              :key="index"
            >
              Total price: <b> ${{tot.price*tot.total}}.00</b>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Delete Dialog-->

    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">Delete Dialog</v-card-title>
          <v-card-text>Do you really want to Delete this data.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="delData()"
            >yes</v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >no</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

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
      timeout: 1000

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
        // url: '/gettotaldata/${this.$session.id()}'
        url: `/gettotaldata/${this.$session.id()}`
      })
        .then(res => {
          this.total = res.data;
          console.log("total", this.total);

        })
        .catch(err => {
          console.log(err);
        });
    },
    setId (id) {
      this.dialog = true;
      this.id = id;
    },
    delData () {
      this.dialog = false;
      this.$axios({
        method: "DELETE",
        url: `/delData/${this.id}`
      })
        .then(res => {
          this.delTemp = res.data;
          this.$router.go("/cart");
          console.log("data delete", this);
        })
        .catch(err => {
          console.log(err);
        });
    },
    nextPage(){
      console.log("check",this.$session.getAll());
    if (!this.$session.get("email")) {
      this.$router.push('/signin')
    } else {
       this.$router.push('/checkout') 
    }

  }
  },
  
  mounted () {
      console.log("email in cart",this.$session.getAll());
    this.getData();
    
    this.getTotalData();
  }
}
</script>