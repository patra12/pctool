<template>
  <v-container :msg="test" class="bv-example-row list pa-0">
    <v-row class="bg">
      <h4 class="font-weight-light">Page List</h4>
      <nuxt-link to="/admin/pages/addPages">
        <v-icon class="right" color="white darken-1" title="Add page">mdi-plus-box</v-icon>
      </nuxt-link>
    </v-row>
    <v-row class="bg-content text-center">
      <div class="row w-100 ma-0">
        <v-col class="border">
          <b>#</b>
        </v-col>
        <v-col class="border">
          <b>Title</b>
        </v-col>
        <v-col class="border">
          <b>Menu Title</b>
        </v-col>
        <v-col class="border">
          <b>Status</b>
        </v-col>
        <v-col class="border">
          <b>Action</b>
        </v-col>
      </div>
      <div v-for="(page, index) in pages" :key="index" class="row w-100 ma-0">
        <v-col class="border font-weight-light">{{ index + 1 }}</v-col>
        <v-col class="border font-weight-light">{{ page.title }}</v-col>
        <v-col class="border font-weight-light">{{ page.menutitle }}</v-col>
        <v-col class="border font-weight-light">{{ setStatus(page.status) }}</v-col>
        <v-col class="border">
          <nuxt-link :to="'/admin/pages/' + page.pageId">
            <v-icon title="Edit" color="purple darken-1">mdi-pencil</v-icon>
          </nuxt-link>
          <nuxt-link to="#">
            <v-icon @click="setId(page.pageId)" color="red darken-2" title="Delete">mdi-close</v-icon>
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
import Listing from "../../../components/pages/page_listing";

export default {
  name: "Pages",
  layout: "admin/defaultAdmin",
  data() {
    return {
      id: "",
      pages: "",
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
        url: "/getpage"
      })
        .then(res => {
          this.pages = res.data;
<<<<<<< HEAD
          // console.log("ok", this.pages);
=======
>>>>>>> u_copy
        })
        .catch(err => {
          console.log(err);
        });
    },
    delData() {
      this.dialog = false;
      this.$axios({
        method: "DELETE",
        url: "/delpage/" + this.id
      })
        .then(res => {
          this.pages = res.data;
          this.$router.go("/admin/page");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  mounted() {
    this.getData();
    const x = this.$store.dispatch("getpage");
    console.log(x);
  }
};
</script>
