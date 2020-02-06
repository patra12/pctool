<template>
  <div>
    <Wishlist />
  </div>
</template>
<script>
import Wishlist from "~/components/front/wishlist";
export default {
  layout: "user/index",
  components: {
    Wishlist,
  }
};
</script>