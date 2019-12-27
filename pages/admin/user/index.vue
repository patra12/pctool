<template>
  <v-container class="bv-example-row list pa-0">
    <v-row class="bg">
      <h4 class="font-weight-light">Usre List</h4>
      <nuxt-link to="/admin/user/addUser">
        <v-icon class="right" color="white darken-1" title="Add page">mdi-plus-box</v-icon>
      </nuxt-link>
    </v-row>
    <v-row class="bg-content text-center">
      <div class="row w-100 ma-0">
        <v-col class="border">
          <b>#</b>
        </v-col>
        <v-col class="border">
          <b>Usre Name</b>
        </v-col>
        <v-col class="border">
          <b>Email</b>
        </v-col>
        <v-col class="border">
          <b>Status</b>
        </v-col>
        <v-col class="border">
          <b>Action</b>
        </v-col>
      </div>
      <div v-for="(user, index) in users" :key="index" class="row w-100 ma-0">
        <v-col class="border font-weight-light">{{ index + 1 }}</v-col>
        <v-col class="border font-weight-light">{{ fullName( user.first_name,user.last_name) }}</v-col>
        <v-col class="border font-weight-light">{{ user.email }}</v-col>
        <v-col class="border font-weight-light">{{ setStatus(user.status) }}</v-col>
        <v-col class="border">
          <!-- <nuxt-link to="./editProduct">-->
          <nuxt-link :to="'/admin/user/' + user.userId">
            <v-icon title="Edit" color="purple darken-1">mdi-pencil</v-icon>
          </nuxt-link>
          <v-icon dark @click="setId(user.userId)" color="red darken-2" title="Delete">mdi-close</v-icon>
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
  name: "User",
  layout: "admin/defaultAdmin",
  data() {
    return {
      id: "",
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
