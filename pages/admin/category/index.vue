<template>
  <v-container class="bv-example-row list pa-0">
    <v-row class="bg">
      <h4 class="font-weight-light">Category List</h4>
      <nuxt-link to="/admin/category/addCategory">
        <v-icon class="right" color="white darken-1" title="Add page">mdi-plus-box</v-icon>
      </nuxt-link>
    </v-row>
    <v-row class="bg-content text-center">
      <div class="row w-100 ma-0">
        <v-col class="border">
          <b>#</b>
        </v-col>
        <v-col class="border">
          <b>Category Name</b>
        </v-col>
        <v-col class="border">
          <b>Category Description</b>
        </v-col>
        <v-col class="border">
          <b>Status</b>
        </v-col>
        <v-col class="border">
          <b>Action</b>
        </v-col>
      </div>
      <div v-for="(category, index) in categories" :key="index" class="row w-100 ma-0">
        <v-col class="border font-weight-light">{{ index + 1 }}</v-col>
        <v-col class="border font-weight-light">{{ category.categoryname }}</v-col>
        <v-col class="border font-weight-light">{{ category.description }}</v-col>
        <v-col class="border font-weight-light">{{ setStatus(category.status) }}</v-col>
        <v-col class="border">
          <!-- <nuxt-link to="./editProduct">-->
          <nuxt-link :to="'/admin/category/' + category.categoryId">
            <v-icon title="Edit" color="purple darken-1">mdi-pencil</v-icon>
          </nuxt-link>
          <nuxt-link to="#">
            <v-icon
              @click="setId(category.categoryId)"
              color="red darken-2"
              title="Delete"
            >mdi-close</v-icon>
          </nuxt-link>
        </v-col>
      </div>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Delete Dialog</v-card-title>
          <v-card-text>Do you really want to Delete this data.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="delData()">yes</v-btn>
            <v-btn color="green darken-1" text @click="dialog = false">no</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-snackbar v-model="snack" :timeout="timeout">Data Deleted Successfully</v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: "Pages",
  layout: "admin/defaultAdmin",
  data() {
    return {
      id: "",
      // firstName: "",
      // lastNname: "",
      // password: "",
      // email: "",
      // phone: "",
      // status: "",
      categories: "",
      dialog: false,
      snack: false,
      timeout: 1000
    };
  },
  methods: {
    setStatus(status) {
      return status === "Y" ? "Active" : "Not Active";
    },
    setId(id) {
      this.dialog = true;
      this.id = id;
    },
    getData() {
      this.$axios({
        method: "GET",
        url: "/getcategory"
      })
        .then(res => {
          this.categories = res.data;
          console.log("ok", this.categories);
        })
        .catch(err => {
          console.log(err);
        });
    },
    delData() {
      this.dialog = false;
      this.$axios({
        method: "DELETE",
        url: "/delcategory/" + this.id
      })
        .then(res => {
          this.pages = res.data;
          this.$router.go("/admin/category/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  mounted() {
    this.getData();
  }
};
</script>
