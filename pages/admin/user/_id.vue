<template>
  <div>
    <v-row class="form pt-0">
      <v-col class="pt-0">
        <v-row>
          <v-col outlined class="head">
            <h4 class="font-weight-light text-light">Edit User</h4>
            <nuxt-link to="/admin/user">
              <v-icon title="back" class="right" color="white darken-1">mdi-arrow-left-bold</v-icon>
            </nuxt-link>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="bg-content">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="firstName" label="First Nname "></v-text-field>

              <v-text-field v-model="lastNname" label="Last Name "></v-text-field>

              <v-text-field v-model="password" label="Password" type="password"></v-text-field>

              <v-text-field v-model="email" label="Email  " type="emial"></v-text-field>

              <v-text-field v-model="phone" label="Phone" type="number"></v-text-field>

              <v-select v-model="status" :items="items" label="Status"></v-select>

              <v-btn @click="putData()" class="my-5 float-right" large color="primary">Update</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "User",
  layout: "admin/defaultAdmin",
  data() {
    return {
      valid: true,
      id: "",
      firstName: "",
      lastNname: "",
      password: "",
      email: "",
      phone: "",
      status: "",

      /* form static select data */
      items: ["Active", "Not Active"]
    };
  },
  methods: {
    getSatus() {
      return this.status === "Active" ? "Y" : "N";
    },
    setStatus(status) {
      status === "Y" ? (this.status = "Active") : (this.status = "Not Active");
    },
    putData() {
      this.$axios({
        method: "PUT",
        url: "/putuser/" + this.id,
        data: {
          firstName: this.firstName,
          lastNname: this.lastNname,
          password: this.password,
          email: this.email,
          phone: this.phone,
          status: this.getSatus()
        }
      })
        .then(res => {
          console.log("Updated inserted");
          this.$router.push("/admin/user");
        })
        .catch(err => {
          console.log(err);
        });
    },
    monoFetch() {
      this.$axios({
        method: "GET",
        url: "/monouser/" + this.$route.params.id
      })
        .then(res => {
          (this.id = res.data[0].userId),
            (this.firstName = res.data[0].first_name),
            (this.lastNname = res.data[0].last_name),
            (this.password = res.data[0].password),
            (this.email = res.data[0].email),
            (this.phone = res.data[0].phone),
            this.setStatus(res.data[0].status);
          console.log(res.data);
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.monoFetch();
    console.log("/monouser/" + this.$route.params.id);
  }
};
</script>
