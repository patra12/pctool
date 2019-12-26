<template>
  <listing msg="ol"></listing>
</template>

<script>
import Listing from "../../../components/pages/page_listing";

export default {
  components: {
    Listing
  },
  layout: "admin/defaultAdmin",
  methods: {
    test() {
      console.log(this.$route);
    }
  },
  created() {
    this.test();
  }
};
</script>
