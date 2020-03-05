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
          <nuxt-link
            class="btn btn-info btn-sm btnBuy pull-right"
            to="/"
          >Continiu shopping</nuxt-link>
          <div class="clearfix"></div>
        </div>
        <div class="card-body">
          <!-- PRODUCT -->
          <div
            class="row"
            v-for="(cart, index) in TempProduct"
            :key="index"
          >
            <div class="col-12 col-sm-12 col-md-2 text-center">
              <img
                class="img-responsive"
                src="~/assets/image/products/electric-concrete-saw-712x712.jpg"
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
                    <span>{{cart.price * cart.qty}}</span>
                    <span></span>
                  </strong>
                </h6>
              </div>

              <div class="col-4 col-sm-4 col-md-4">
                <div class="quantity">
                  <input
                    type="button"
                    @click="plus(cart.productId,cart.qty)"
                    value="+"
                    class="plus"
                  />
                  <input
                    step="1"
                    max="99"
                    min="1"
                    :value="cart.qty"
                    title="Qty"
                    class="qty"
                    size="4"
                  />
                  <input
                    type="button"
                    @click="minus(cart.productId,cart.qty)"
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

          <div v-if="getItemCount">
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
                    onclick="alert('Please enter coupon code!');return false;"
                    class="btn btn-outline-info pull-right"
                  >Update shopping cart</a>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div>
              <center>
                <img
                  src="~/assets/image/empty.png"
                  height
                  width="170px"
                />
                <h4>Your cart is empty!</h4>
                <p>Add items to it now.</p>
              </center>
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
            >Checkout</nuxt-link>-->
            <div v-if="getItemCount">
              <div
                @click="nextPage()"
                class="btn btn-info pull-right btnBuy"
              >Checkout</div>
              <div
                style="margin: 5px"
                class="pull-right"
              >
                Total price:
                <b>${{getTotalPrice}}.00</b>
              </div>
            </div>
            <div v-else>
              <center>
                <a
                  href="/"
                  class="btn btn-info pull-right btnBuy"
                >Shop now</a>
              </center>
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
import { mapState, mapGetters } from "vuex";
export default {
  data () {
    return {
      products: "",
      productId: "",
      id: "",
      dialog: false,
      snack: false,
      timeout: 1000,

      totalprice: 0,
    };
  },

  computed: {
    ...mapGetters({
      getItemCount: "tempcart/G_tempOrderCount",
      getTotalPrice: "tempcart/G_tempOrderPrice",
    }),
    ...mapState({
      TempProduct: state =>
        state.tempcart.tempCartProductData
    }),
  },


  methods: {


    // Listing of diffrent products in cart page from state
    getTotalData () {
      this.$store.dispatch(
        "tempcart/getTempOrderProductDataBySession",
        this.$session.id()
      );
    },


    // Increase product quantity 
    plus (pid, qty) {
      let increasedQty = qty + 1;
      this.updateQty(pid, increasedQty);
    },
    //Decrease product quantity 
    minus (pid, qty) {
      let decreasedQty = qty != 1 ? qty - 1 : qty = 1;
      this.updateQty(pid, decreasedQty);
    },
    updateQty (pid, qty) {
      const payload = {
        sessionid: this.$session.id(),
        productId: pid,
        quantity: qty
      }

      this.$store.dispatch(
        "tempcart/updateProductQuantity", payload
      );
    },


    // Deleting producut form cart
    setId (id) {
      this.dialog = true;
      this.id = id;
    },
    delData () {
      this.dialog = false;
      this.$store.dispatch(
        "tempcart/deleteTempOrder",
        this.id
      );
    },


    // Moving to next page after selection of profuct 
    nextPage () {
      if (!this.$session.get("email")) {
        this.$router.push("/signin");
      } else {
        this.$router.push("/checkout");
      }
    }
  },

  async mounted () {
    this.getTotalData();
  }
};
</script>