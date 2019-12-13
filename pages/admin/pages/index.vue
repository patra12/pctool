<template>
  <v-container class="bv-example-row list pa-0">
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
        <v-col class="border font-weight-light">{{ page.product_name }}</v-col>
        <v-col class="border font-weight-light">{{ page.product_alias }}</v-col>
        <v-col class="border font-weight-light">{{ page.status }}</v-col>
        <v-col class="border">
          <nuxt-link :to="'/admin/pages/' + page.id">
            <v-icon title="Edit" color="purple darken-1">mdi-pencil</v-icon>
          </nuxt-link>
          <nuxt-link to="#">
            <v-icon @click="delete_data(page.id)" color="red darken-2" title="Delete">mdi-close</v-icon>
          </nuxt-link>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Pages",
  layout: "admin/defaultAdmin",
  data() {
    return {
      // id: "",
      // firstName: "",
      // lastNname: "",
      // password: "",
      // email: "",
      // phone: "",
      // status: "",
      users: "",
      dialog: false,
      snack: false,
      timeout: 1000
    };
  },
  methods: {
    fullName(fname, lname) {
      return fname + " " + lname;
    },
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
        url: "/getuser"
      })
        .then(res => {
          this.users = res.data;
          console.log(this.users);
        })
        .catch(err => {
          console.log(err);
        });
    },
    delData() {
      this.dialog = false;
      this.$axios({
        method: "DELETE",
        url: "/deluser/" + this.id
      })
        .then(res => {
          this.users = res.data;
          this.$router.go("/admin/user");
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
