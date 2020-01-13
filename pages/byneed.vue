<template>
  <div class="content">
    <div class="container">
      <div class="row text-center">
        <h1>By need</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <!--==category sideber==-->

        <CategorySidebar />
        <div class="col-md-9">
          <!--==small multiple prouct product==-->

          <MultiCard />
          <MultiCard />
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