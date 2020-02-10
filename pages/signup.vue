<template>
  <div class="container">
    <div class="col-md-8 col-12 mx-auto">
      <div class="card bg-light">
        <article
          class="card-body mx-auto"
          style="max-width: 400px;"
        >
          <h4 class="card-title mt-3 text-center">Create Account</h4>
          <p class="text-center">Get started with your free account</p>

           <v-form ref="form" v-model="valid" lazy-validation>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="mdi mdi-account"></i>
                </span>
              </div>
              <input
                name="first_name"
                v-model="first_name"
                class="form-control"
                placeholder="Full name"
                type="text"
              />
            </div>

            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="mdi mdi-account"></i>
                </span>
              </div>
              <input
                name="last_name"
                v-model="last_name"
                class="form-control"
                placeholder="Last name"
                type="text"
              />
            </div>
            <!-- form-group// -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="mdi mdi-email-open"></i>
                </span>
              </div>
              <input
                name="email"
                v-model="email"
                class="form-control"
                placeholder="Email address"
                type="email"
              />
            </div>
            <!-- form-group// -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="mdi mdi-phone-in-talk"></i>
                </span>
              </div>
              <!-- <select
                class="custom-select"
                style="max-width: 120px;"
              >
                <option selected>+971</option>
                <option value="1">+972</option>
                <option value="2">+198</option>
                <option value="3">+701</option>
              </select> -->
              <input
                name="phone"
                v-model="phone"
                class="form-control"
                placeholder="Phone number"
                type="text"
              />
            </div>
            <!-- form-group// -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="mdi mdi-lock"></i>
                </span>
              </div>
              <input
              name="password"
              v-model="password" 
                class="form-control"
                placeholder="Create password"
                type="password"
              />
            </div>
            <!-- form-group// -->
            <!-- <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="mdi mdi-lock"></i>
                </span>
              </div>
              <input
                class="form-control"
                placeholder="Repeat password"
                type="password"
              />
            </div> -->
            <!-- form-group// -->
            <div class="form-group">
               <v-btn @click="addData()" class="btn btn-primary btn-block" >Create Account</v-btn>
            </div>
            <!-- form-group// -->
            <p class="text-center">
              Have an account?
              <nuxt-link to="signin">LogIn</nuxt-link>
            </p>
           </v-form>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "User",
  data() {
    return {
      valid: true,
      first_name: "",
      last_name: "",
      password: "",
      email: "",
      phone: "",
      status: "",
      items: ["Active", "Not Active"]
    };
  },
  methods: {
    getSatus() {
      return this.status === "Active" ? "Y" : "N";
    },
    addData() {
      this.$axios({
        method: "POST",
        url: "/adduser",
        data: {
          first_name: this.first_name,
          last_name: this.last_name,
          password: this.password,
          email: this.email,
          phone: this.phone,
          status: this.getSatus()
        }
      })
        .then(res => {
          console.log("data inserted");
          this.$router.push("signin");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>