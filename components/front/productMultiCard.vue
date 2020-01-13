// holds only card detailse 
// not how they are shown in a view port


<template>
  <div class="row">
    <div class="col-md-4 col-sm-6">
      <div class="product-grid">
        <div class="product-image">
          <a href="#">
            <img class="pic-1" src="~/assets/image/products/HAND-HELD-SAW.jpg" />
            <img class="pic-2" src="~/assets/image/products/HAND-HELD-SAW-2.jpg" />
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
          <span class="product-new-label">Sale</span>
          <span class="product-discount-label">20%</span>
        </div>

        <div class="product-content">
          <p class="product-title">
            <a href="#">HAND HELD SAW</a>
          </p>

          <button class="add-to-cart">CHECK OUR BLADES</button>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="product-grid">
        <div class="product-image">
          <a href="#">
            <img class="pic-1" src="~/assets/image/products/EARLY-ENTRY-SOFF.jpg" />
            <img class="pic-2" src="~/assets/image/products/EARLY-ENTRY-SOFF-2.jpg" />
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
          <span class="product-new-label">Sale</span>
          <span class="product-discount-label">20%</span>
        </div>

        <div class="product-content">
          <p class="product-title">
            <a href="#">EARLY ENTRY/SOFF - CUT</a>
          </p>

          <button class="add-to-cart">CHECK OUR BLADES</button>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="product-grid">
        <div class="product-image">
          <a href="#">
            <img class="pic-1" src="~/assets/image/products/GRINDER-SAW.jpg" />
            <img class="pic-2" src="~/assets/image/products/GRINDER-SAW-2.jpg" />
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
          <span class="product-new-label">Sale</span>
          <span class="product-discount-label">20%</span>
        </div>

        <div class="product-content">
          <p class="product-title">
            <a href="#">GRINDER SAW</a>
          </p>

          <button class="add-to-cart">CHECK OUR BLADES</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product multi card"
};
</script>