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
              <p class="product-title">Electric Concrete Saw Husqvarna K4000 Husqvarna K970 Problems Chop Saw</p>
              <p class="product-price display-4">$1,840.00</p>
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
              <div class="qty-changer"><label for="quant">Quantity</label>
                <button class="qty-change">-</button>
                <input
                  class="qty-input form-group"
                  type="number"
                  value="1"
                />
                <button class="qty-change">+</button>
              </div>
              <nuxt-link to="/cart"><button class="btn btn-primary btnBuy">Buy Now</button></nuxt-link>
              <div class="lineBreak"></div>

              <div class="productAllDetails">
                <div>
                  <v-tabs
                    v-model="tab"
                    background-color="tabHeaderBackground"
                    class="elevation-2"
                    dark
                    :centered="centered"
                    :grow="grow"
                    :vertical="vertical"
                    :right="right"
                    :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
                    :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
                    :icons-and-text="icons"
                  >
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab
                      v-for="i in tabs"
                      :key="i"
                      class="tyyyytyyy"
                      :href="`#tab-${i}`"
                    >
                      Description {{ i }}
                      <v-icon v-if="icons">mdi-phone</v-icon>
                    </v-tab>
                    <v-tab
                      class="tyyyytyyy"
                      :href="`#tab-4`"
                    >
                      FEATURES
                      <v-icon v-if="icons">mdi-phone</v-icon>
                    </v-tab>

                    <v-tab-item
                      v-for="i in tabs"
                      :key="i"
                      :value="'tab-' + i"
                    >
                      <v-card
                        flat
                        tile
                      >
                        <v-card-text>{{ text }}</v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item
                      :key="i"
                      :value="'tab-4'"
                    >
                      <v-card
                        flat
                        tile
                      >
                        <v-card-text>{{ text }}</v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs>
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
export default {
  data () {
    return {
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
    }
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
    }
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