<template>
  <div>
    <div class="row justify-content-center">
      <div
        v-for="(product,index) in products"
        class="col-md-4 col-sm-6"
        :key="index"
      >
        <div class="product-grid">
          <div class="product-image">
            <nuxt-link :to="'/productDetails/' +product.productId"> <img
                class="pic-1"
                src="~/assets/image/products/HAND-HELD-SAW.jpg"
              /></nuxt-link>
            <!-- <img class="pic-1" :src="make_image_path(product.showing_img1)" />
              <img class="pic-2" :src="make_image_path(product.aminate_img2)" />-->
            <ul class="social">
              <li>
                <span data-tip="Quick View">
                  <v-icon class="white--text">mdi-magnify</v-icon>
                </span>
              </li>
              <li>
                <span
                  href
                  data-tip="Add to Wishlist"
                >
                  <v-icon class="white--text">mdi-shopping</v-icon>
                </span>
              </li>
              <li>
                <span
                  @click.prevent='addToCart(product.productId,product.price)'
                  data-tip="Add to Cart"
                >
                  <v-icon class="white--text">mdi-cart</v-icon>
                </span>
              </li>
            </ul>
          </div>

          <div class="product-content">
            <!-- <span>{{product}}</span> -->
            <p class="product-title">
              <nuxt-link :to="'/productDetails/' +product.productId">{{product.product_name}}</nuxt-link>
            </p>

            <nuxt-link :to="'/productDetails/' +product.productId">
              <button class="add-to-cart">CHECK OUR BLADES</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "productMultiCard",
  data () {
    return {
      products: "",
      sessionid: "",
      productId: "",
      price: "",
      dialog: false,
      id: "",
    };
  },
  computed: {
    ...mapGetters({
      checkProductPresnce: "tempcart/G_checkProductInTempProduct",
      row: "tempcart/G_gettingProductInTempProduct"
    })
  },
  methods: {
    make_image_path (img_name) {
      //must have to change to server baseurl path
      return require(`~/assets/image/products/${img_name}`);
    },
    getData () {
      this.$axios({
        method: "GET",
        url: "/getproduct"
      })
        .then(res => {
          this.products = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * This is calling addData or updateQty function
     * based on same item is present in cart or not
     */
    addToCart (productId, price, qty) {
      if (this.checkProductPresnce(productId)) {
        //updating quantity
        let quantity = this.row(productId).qty + 1;
        let tempdata = this.updateQty(productId, quantity);
        if (tempdata) {
          this.$router.push("/cart");
        }
      }
      else {
        //adding quantity
        this.addData(productId, price);
        this.$store.dispatch(
          "tempcart/getTempOrderProductDataBySession",
          this.$session.id()
        );
      }
    },
    async addData (productId, price) {
      const formData = {
        sessionid: this.$session.id(),
        productId: productId,
        price: price,
        quantity: 1

      }
      const tempdata = await this.$store.dispatch(
        "tempcart/addTempdata", formData
      );

      if (tempdata) {
        this.$router.push("/cart");
      }
    },
    async updateQty (pid, qty) {
      const payload = {
        sessionid: this.$session.id(),
        productId: pid,
        quantity: qty
      }
      return await this.$store.dispatch(
        "tempcart/updateProductQuantity", payload
      );
    },
  },
  mounted () {
    this.getData();

  }
};
</script>