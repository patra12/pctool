<template>
  <div class="bottomProducts">
    <div class="grayBorder"></div>
    <div class="btmProductHeading">
      <h3>LINES OF EQUIPMENT - NEW!!!</h3>
    </div>

    <div class="col-md-12 col-sm-12">
      <div v-for="(product,index) in products" class="product-grid mb-5" :key="index">
        <div class="product-image">
          <a href="#">
            <img class="pic-1" :src=" make_image_path(product.image)" />
          </a>
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
</template>
<script>
export default {
  name: "productSingleCard",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "PCD HEADS FLOORING",
          image: "PCD-HEADS-FLOORING.jpg",
          button_label: "CHECK OUR BLADES"
        },
        {
          id: 2,
          name: "HAND HELD SAW",
          image: "HAND-HELD-SAW-big.jpg",
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