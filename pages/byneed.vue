<template>
  <div class="content">
    <div class="container">
      <div class="row">
        <!--==category sideber==-->

        <CategorySidebar />
        <div class="col-md-9">
          <h1 class="text-center product-header">BY NEED</h1>
          <!--==small multiple prouct product==-->

          <MultiCard />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CategorySidebar from "~/components/front/category";
import MultiCard from "~/components/front/productMultiCard";
export default {
  layout: "",
  components: {
    MultiCard,
    CategorySidebar
  }
};
</script>