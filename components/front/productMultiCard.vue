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
                  @click.prevent='addData(product.productId,product.price)'
                  data-tip="Add to Cart"
                >
                  <v-icon class="white--text">mdi-cart</v-icon>
                </span>
              </li>
            </ul>
          </div>

          <div class="product-content">
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
    addData (productId, price) {
      this.$axios({
        method: "POST",
        url: "/addProductId",
        data: {
          sessionid: this.$session.id(),
          productId: productId,
          price: price,
          quantity:1

        }
      })
        .then(res => {
          //this.$router.push("/cart");
          window.location.replace("/cart");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted () {
    this.getData();
  }
};
</script>