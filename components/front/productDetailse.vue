//Single Product page
<template>

  <main>
    <div class="container p-0">

      <div class="card mb-10 mt-10">

        <div class="card-body store-body row">
          <div class="col-md-5 col-sm-12 borderRight">
            <div class="product-info">
              <div
                class="product-gallery"
                id="sticky"
              >
                <div class="product-gallery-thumbnails">
                  <ol class="thumbnails-list list-unstyled">
                    <li><img
                        src="~/assets/image/products/electric-concrete-saw-712x712.jpg"
                        alt=""
                      ></li>
                    <li><img
                        src="~/assets/image/products/HAND-HELD-SAW-2.jpg"
                        alt=""
                      ></li>
                    <li><img
                        src="~/assets/image/products/HYDRAULIC-SAW.jpg"
                        alt=""
                      ></li>
                    <li><img
                        src="~/assets/image/products/electric-concrete-saw-712x712.jpg"
                        alt=""
                      ></li>
                  </ol>
                </div>
                <div class="product-gallery-featured">
                  <img
                    src="~/assets/image/products/electric-concrete-saw-712x712.jpg"
                    alt=""
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7 col-sm-12">
            <div class="product-payment-details">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">By Application</a></li>
                <li class="breadcrumb-item"><a href="#">By Industry</a></li>
                <li
                  class="breadcrumb-item active"
                  aria-current="page"
                >Saw Husqvarna</li>
              </ol>
              <p class="last-sold text-muted"><small>145 items sold</small></p>
              <p class="product-title">{{product.product_name}}</p>
              <p class="product-price display-4">${{product.price}}</p>
              <p class="actualPrice mb-0">$1,940.00</p>
              <p class="saveTxt">(You save $100.00)</p>
              <div class="text-muted"><small><a href="#">Know More</a> about delivery time and shipping forms</small></div>
              <div class="lineBreak"></div>
              <table class="skuTable">
                <tr>
                  <td>SKU:</td>
                  <td>K970</td>
                </tr>
                <tr>
                  <td>Shipping:</td>
                  <td>Free Shipping</td>
                </tr>
              </table>
              <!-- <div class="qty-changer"><label for="quant">Quantity</label>
                <button class="qty-change">-</button>
                <input
                  class="qty-input form-group"
                  type="number"
                  value="1"
                />
                <button class="qty-change">+</button>
              </div> -->
              <nuxt-link to="/cart"><button
                  class="btn btn-primary btnBuy"
                  @click="addToCart(product.productId,product.price)"
                >Buy Now</button></nuxt-link>
              <div class="lineBreak"></div>

              <div class="productAllDetails">
                <div>

                  <v-card
                    flat
                    tile
                  >
                    <v-card-text>{{product.product_desc}}</v-card-text>
                  </v-card>
                  <!-- </v-tab-item>
                  </v-tabs>   -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </main>

</template>
<script>
import { mapGetters } from "vuex";
export default {
  data () {
    return {
      products: "",
      tab: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      icons: false,
      centered: false,
      grow: false,
      vertical: false,
      prevIcon: false,
      nextIcon: false,
      right: false,
      tabs: 3,
      product: ""
    }
  },
  computed: {
    ...mapGetters({
      checkProductPresnce: "tempcart/G_checkProductInTempProduct",
      row: "tempcart/G_gettingProductInTempProduct"
    })
  },
  methods: {
    imageChange () {
      let galleryThumbnail = document.querySelectorAll(".thumbnails-list li");
      let galleryFeatured = document.querySelector(".product-gallery-featured img");

      // loop all items
      galleryThumbnail.forEach((item) => {
        item.addEventListener("mouseover", function () {
          let image = item.children[0].src;
          galleryFeatured.src = image;
        });
      });
    },
    getData () {
      this.$axios({
        url: "/monoproduct/" + this.$route.params.id,
        method: "get"
      })
        .then(res => {
          this.product = res.data[0];
        })
        .catch(err => {
          // handle errorr
          console.log(err);
        });
    },
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

}
</script>
<style>
#sticky {
  position: sticky;
  position: -webkit-sticky;
  width: 100%;
  height: auto;
  top: 20px;
  display: flex;
  justify-content: center;
  color: #fff;
}
</style>