<template>
  <div class="headerblock mainOuter">
    <!-- Note -->
    <div class="container firstTop">
      <div class="row">
        <div class="leftBlock">
          <div class="wlcomeBlock">
            <img
              src="~/assets/image/icons/wlc.png"
              alt="Welcome"
            />
            <p>Welcome to Pro Construction Tools</p>
          </div>
          <div class="addressBlock">
            <img
              src="~/assets/image/icons/pointer.png"
              alt="Welcome"
            />
            <p>Address of Pro Construction Tools</p>
          </div>
        </div>
        <div class="rightBlock">
          <div
            v-if="!isSessionPresent"
            class="signUpBlock"
          >
            <nuxt-link to="/signin">Sign in</nuxt-link>
            <nuxt-link to="/signup">Sign Up</nuxt-link>
          </div>
          <div v-else>
            <a>
              <div @click="LogOut()">Sign out</div>
            </a>
          </div>
          <!-- <div class="signUpBlock">
            <nuxt-link to="/signin">Sign in</nuxt-link>
            <nuxt-link to="/signup">Sign Up</nuxt-link>
          </div>
         
           <nuxt-link to="signUpBlock">
            <div @click="LogOut()">Log out</div>
          </nuxt-link>-->
        </div>
      </div>
    </div>

    <!-- Header -->
    <div class="container">
      <div class="row vCenter">
        <div class="logoBlock">
          <nuxt-link to="/">
            <img
              src="~/assets/image/pcToolsLogo.png"
              alt="PC Tools Logo"
            />
          </nuxt-link>
        </div>
        <div class="searchblock">
          <form>
            <div class="inner-form">
              <div class="input-field first-wrap">
                <div class="input-select">

                  <select
                    data-trigger
                    name="choices-single-defaul"
                  >
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
                <input
                  id="search"
                  type="text"
                  placeholder="Enter Keywords?"
                />
              </div>
              <div class="input-field third-wrap">
                <button
                  class="btn-search"
                  type="button"
                >
                  <img
                    src="~/assets/image/icons/seaRch.png"
                    alt="Search Icon"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="cartSection">
          <nuxt-link
            to="/cart"
            style="text-decoration:none"
          >
            <div class="cartSectionInner">
              <div class="cartLeft">
                <p>SHOPPING ITEM</p>
                <p>
                  <span>$</span>
                  <span>{{getTotalPrice}}.00</span>
                  <span>|</span>
                  <span>{{getItemCount}} ITEM</span>
                </p>
              </div>
              <div class="cartRight">
                <img
                  src="~/assets/image/icons/shoppingBag.png"
                  alt="Shopping Bag"
                />
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div
      class="topnav"
      id="myTopnav"
    >
      <div class="container">
        <nuxt-link
          to="/"
          class="active"
        >
          <img
            src="~/assets/image/icons/home.png"
            alt="Home Icon"
          />
        </nuxt-link>

        <nuxt-link to="/byneed">By Need</nuxt-link>
        <nuxt-link to="/byapplication">By Application</nuxt-link>
        <nuxt-link to="/byindustry">By Industry</nuxt-link>
        <nuxt-link to="/contact">Contact Us</nuxt-link>
        <a
          href="javascript:void(0);"
          class="icon"
          @click="myFunction()"
        >
          <img
            src="~/assets/image/icons/sortBar.png"
            alt="Menu Icon"
          />
        </a>
        <nuxt-link
          to="/signin"
          class="wishlist-btn"
        >
          <v-icon>mdi-heart</v-icon>
          <span>Wishlist(4)</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>


<script>
import "~/assets/style/style.scss";
import { mapGetters } from "vuex";
export default {
  name: "SiteHeader",
  data () {
    return {
      isSessionPresent: Boolean,
    };
  },
  computed: {
    ...mapGetters({
      getItemCount: "tempcart/G_tempOrderCount",
      getTotalPrice: "tempcart/G_tempOrderPrice"
    }),

    is_session () {
      if (this.$session.get("email")) {
        this.isSessionPresent = true;
      } else {
        this.isSessionPresent = false;
      }
    }
  },
  methods: {
    myFunction () {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },

    getData () {
      const data = {
        sessionId: this.$session.id()
      }
      this.$store.dispatch('tempcart/getTempDataBySession', data)
    },

    LogOut () {
      this.$session.destroy();
      this.isSessionPresent = false;
      this.$router.push("/");
    }
  },

  mounted () {
    if (!this.$session.exists()) {
      this.$session.start();
    }
    this.getData();
    this.is_session;
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