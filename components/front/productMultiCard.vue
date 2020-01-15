// holds only card detailse 
// not how they are shown in a view port


<template>
  <div>
    <div class="row justify-content-center">
      <div v-for="(product,index) in products" class="col-md-4 col-sm-6" :key="index">
        <div class="product-grid">
          <div class="product-image">
            <a href="#">
              <img class="pic-1" :src="make_image_path(product.showing_img1)" />
              <img class="pic-2" :src="make_image_path(product.aminate_img2)" />
            </a>
            <ul class="social">
              <li>
                <a href data-tip="Quick View">
                  <v-icon class="white--text">mdi-magnify</v-icon>
                </a>
              </li>
              <li>
                <a href data-tip="Add to Wishlist">
                  <v-icon class="white--text">mdi-shopping</v-icon>
                </a>
              </li>
              <li>
                <a href data-tip="Add to Cart">
                  <v-icon class="white--text">mdi-cart</v-icon>
                </a>
              </li>
            </ul>
            <span class="product-new-label">{{product.offer_label}}</span>
            <span class="product-discount-label">{{product.offer_persentage}}</span>
          </div>

          <div class="product-content">
            <p class="product-title">
              <a href="#">{{product.name}}</a>
            </p>

            <button class="add-to-cart">{{product.button_label}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productMultiCard",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "HAND HELD SAW",
          offer_label: "SALE",
          offer_persentage: "20%",
          showing_img1: "HAND-HELD-SAW.jpg",
          aminate_img2: "HAND-HELD-SAW-2.jpg",
          button_label: "CHECK OUR BLADES"
        },
        {
          id: 2,
          name: "EARLY ENTRY/SOFF - CUT",
          offer_label: "SALE",
          offer_persentage: "20%",
          showing_img1: "EARLY-ENTRY-SOFF.jpg",
          aminate_img2: "EARLY-ENTRY-SOFF-2.jpg",
          button_label: "CHECK OUR BLADES"
        },
        {
          id: 3,
          name: "GRINDER SAW",
          offer_label: "SALE",
          offer_persentage: "20%",
          showing_img1: "GRINDER-SAW.jpg",
          aminate_img2: "GRINDER-SAW-2.jpg",
          button_label: "CHECK OUR BLADES"
        },
        {
          id: 4,
          name: "CORE DRILL SAW ",
          offer_label: "SALE",
          offer_persentage: "20%",
          showing_img1: "CORE-DRILL-SAW.jpg",
          aminate_img2: "CORE-DRILL-SAW.jpg",
          button_label: "CHECK OUR BLADES"
        },
        {
          id: 5,
          name: "HYDRAULIC SAW",
          offer_label: "SALE",
          offer_persentage: "20%",
          showing_img1: "HYDRAULIC-SAW.jpg",
          aminate_img2: "HYDRAULIC-SAW.jpg",
          button_label: "CHECK OUR BLADES"
        },
        {
          id: 6,
          name: "CHAIN SAW",
          offer_label: "SALE",
          offer_persentage: "20%",
          showing_img1: "CHAIN-SAW.jpg",
          aminate_img2: "CHAIN-SAW.jpg",
          button_label: "CHECK OUR BLADES"
        },
        {
          id: 7,
          name: "WALK BEHIND SAW",
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
    make_image_path(img_name) {
      //must have to change to server baseurl path
      return require(`~/assets/image/products/${img_name}`);
    }
  }
};
</script>