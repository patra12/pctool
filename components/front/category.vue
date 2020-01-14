<template>
  <div class="col-md-3 pb-5">
    <div v-for="(parent,index) in left_pannel_parent_categories" :key="index" class="list-group">
      <p>{{parent.name}}</p>
      <hr class="hrMod" />
      <a
        v-for="(category,index) in parent.categories"
        :key="index"
        :href="index"
        class="list-group-item"
      >
        <span>{{category.name}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      left_pannel_parent_categories: [
        {
          id: 1,
          name: "Construction :",
          categories: [
            {
              id: 1,
              name: "Wall Saws"
            },
            {
              id: 2,
              name: "Ring Saws"
            },
            {
              id: 3,
              name: "Pro Slab Saws"
            },
            {
              id: 4,
              name: "Dry Blades"
            },
            {
              id: 5,
              name: "Asphalt Blades"
            },
            {
              id: 6,
              name: "Grinding wheels"
            },
            {
              id: 7,
              name: "Core Bits"
            },
            {
              id: 8,
              name: "Early entry blades"
            },
            {
              id: 8,
              name: "AOC - Asphalt ove concrete"
            },
            {
              id: 8,
              name: "Flooring"
            }
          ]
        },
        {
          id: 2,
          name: "Line of equipement :",
          categories: [
            {
              id: 1,
              name: "Dynatech - PCD Head System"
            },
            {
              id: 1,
              name: "Vacuworx"
            }
          ]
        }
      ]
    };
  },
  methods() {}
};
</script>