<template>
  <div class="">
    <nuxt-link to="/user/wishlist">wish list</nuxt-link> <br>
    <nuxt-link to="/user/orders">my orders</nuxt-link> <br>
    <nuxt-link to="/user/myAccount">my account</nuxt-link> <br>
    <button
      @click="logout()"
      class="text-primary"
    >logout</button><br>
  </div>
</template>
<script>
export default {
  name: "sideber",
  methods: {
    logout () {
      this.$router.push("/");
    }
  }
}
</script>