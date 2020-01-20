<template>
  <div class="indexOuter">
    <div class="image-aboutus-banner sideImg1">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1
              class="w-50 hero-text-shadow"
            >The K 535i is an excellent addition to Husqvarna Construction's power cutter range</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="container">
        <div class="row">
          <!--==category sideber==-->

          <CategorySidebar />
          <div class="col-md-9">
            <h1 class="text-center product-header">BY MACHINE</h1>
            <!--==small multiple prouct product==-->

            <MultiCard />

            <!--==big single  prouct product==-->

            <SingleCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategorySidebar from "~/components/front/category";
import MultiCard from "~/components/front/productMultiCard";
import SingleCard from "~/components/front/productSingleCard";
export default {
  layout: "",
  components: {
    CategorySidebar,
    MultiCard,
    SingleCard
  }
};
</script>

