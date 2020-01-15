<template>
  <div class="headerblock mainOuter">
    <!-- Note -->
    <div class="container firstTop">
      <div class="row">
        <div class="leftBlock">
          <div class="wlcomeBlock">
            <img src="~/assets/image/icons/wlc.png" alt="Welcome" />
            <p>Welcome to Pro Construction Tools</p>
          </div>
          <div class="addressBlock">
            <img src="~/assets/image/icons/pointer.png" alt="Welcome" />
            <p>Address of Pro Construction Tools</p>
          </div>
        </div>
        <div class="rightBlock">
          <div class="signUpBlock">
            <a href="#">login</a>
            <a href="#">signUp</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Header -->
    <div class="container">
      <div class="row vCenter">
        <div class="logoBlock">
          <img src="~/assets/image/pcToolsLogo.png" alt="PC Tools Logo" />
        </div>
        <div class="searchblock">
          <form>
            <div class="inner-form">
              <div class="input-field first-wrap">
                <div class="input-select">
                  <select data-trigger name="choices-single-defaul">
                    <option placeholder>All Category</option>
                    <option>New Arrivals</option>
                    <option>Sale</option>
                    <option>Ladies</option>
                    <option>Men</option>
                    <option>Clothing</option>
                    <option>Footwear</option>
                    <option>Accessories</option>
                  </select>
                </div>
              </div>
              <div class="input-field second-wrap">
                <input id="search" type="text" placeholder="Enter Keywords?" />
              </div>
              <div class="input-field third-wrap">
                <button class="btn-search" type="button">
                  <img src="~/assets/image/icons/seaRch.png" alt="Search Icon" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="cartSection">
          <div class="cartSectionInner">
            <div class="cartLeft">
              <p>SHOPPING ITEM</p>
              <p>
                $0.00
                <span>0 ITEM</span>
              </p>
            </div>
            <div class="cartRight">
              <img src="~/assets/image/icons/shoppingBag.png" alt="Shopping Bag" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="topnav" id="myTopnav">
      <div class="container">
        <nuxt-link to="/" class="active">
          <img src="~/assets/image/icons/home.png" alt="Home Icon" />
        </nuxt-link>

        <nuxt-link to="/byneed">By Need</nuxt-link>
        <nuxt-link to="/byapplication">By Application</nuxt-link>
        <nuxt-link to="/byindustry">By Industry</nuxt-link>
        <nuxt-link to="/contact">Contact Us</nuxt-link>
        <a href="javascript:void(0);" class="icon" @click="myFunction()">
          <img src="~/assets/image/icons/sortBar.png" alt="Menu Icon" />
        </a>
        <a class="wishlist-btn">
          <v-icon>mdi-heart</v-icon>
          <span>Wishlist(4)</span>
        </a>
      </div>
    </div>
  </div>
</template>





<script>
import "~/assets/style/style.scss";
export default {
  name: "SiteHeader",
  methods: {
    myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }
};
</script>
<style scoped>
.wishlist-btn {
  float: right !important;
  padding: 15px 25px !important;
  background-color: #d23940;
}
.wishlist-btn i {
  color: #fff;
}
</style>