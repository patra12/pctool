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
            <img
              class="pic-1"
              src="~/assets/image/products/HAND-HELD-SAW.jpg"
            />
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
                  @click="addData(product.productId,product.price)"
                  data-tip="Add to Cart"
                >
                  <v-icon class="white--text">mdi-cart</v-icon>
                </span>
              </li>
            </ul>
            <!-- <span class="product-new-label">{{product.offer_label}}</span>
            <span class="product-discount-label">{{product.offer_persentage}}</span> -->
          </div>

          <div class="product-content">
            <p class="product-title">
              <a href="#">{{product.product_name}}</a>
            </p>

            <nuxt-link to="/productDetails">
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
      products: [
        {
          id: 1,
          product_name: "HAND HELD SAW",
          offer_label: "SALE",
          offer_persentage: "20%",
          showing_img1: "HAND-HELD-SAW.jpg",
          aminate_img2: "HAND-HELD-SAW-2.jpg",
          button_label: "CHECK OUR BLADES"
        },
        {
          id: 2,
          product_name: "EARLY ENTRY/SOFF - CUT",
          offer_label: "SALE",
          offer_persentage: "20%",
          showing_img1: "EARLY-ENTRY-SOFF.jpg",
          aminate_img2: "EARLY-ENTRY-SOFF-2.jpg",
          button_label: "CHECK OUR BLADES"
        },
        {
          id: 3,
          product_name: "GRINDER SAW",
          offer_label: "SALE",
          offer_persentage: "20%",
          showing_img1: "GRINDER-SAW.jpg",
          aminate_img2: "GRINDER-SAW-2.jpg",
          button_label: "CHECK OUR BLADES"
        },
        {
          id: 4,
          product_name: "CORE DRILL SAW ",
          offer_label: "SALE",
          offer_persentage: "20%",
          showing_img1: "CORE-DRILL-SAW.jpg",
          aminate_img2: "CORE-DRILL-SAW.jpg",
          button_label: "CHECK OUR BLADES"
        },
        {
          id: 5,
          product_name: "HYDRAULIC SAW",
          offer_label: "SALE",
          offer_persentage: "20%",
          showing_img1: "HYDRAULIC-SAW.jpg",
          aminate_img2: "HYDRAULIC-SAW.jpg",
          button_label: "CHECK OUR BLADES"
        },
        {
          id: 6,
          product_name: "CHAIN SAW",
          offer_label: "SALE",
          offer_persentage: "20%",
          showing_img1: "CHAIN-SAW.jpg",
          aminate_img2: "CHAIN-SAW.jpg",
          button_label: "CHECK OUR BLADES"
        },
        {
          id: 7,
          product_name: "WALK BEHIND SAW",
          offer_label: "SALE",
          offer_persentage: "20%",
          showing_img1: "WALK-BEHIND-SAW.jpg",
          aminate_img2: "WALK-BEHIND-SAW.jpg",
          button_label: "CHECK OUR BLADES"
        }
      ]
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
      console.log("test productId", productId);
      console.log("test price", price);
      this.$axios({
        method: "POST",
        url: "/addProductId",
        data: {
          sessionid: this.$session.id(),
          productId: productId,
          price: price
        }
      })
        .then(res => {
          this.$router.go("/cart");
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