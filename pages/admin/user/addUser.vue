<template>
  <div>
    <v-row class="form pt-0">
      <v-col class="pt-0">
        <v-row>
          <v-col outlined class="head">
            <h4 class="font-weight-light text-light">Add User</h4>
            <nuxt-link to="/admin/user">
              <v-icon title="back" class="right" color="white darken-1"
                >mdi-arrow-left-bold</v-icon
              >
            </nuxt-link>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="bg-content">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="firstName"
                label="First Nname "
              ></v-text-field>

              <v-text-field
                v-model="lastNname"
                label="Last Name "
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                type="password"
              ></v-text-field>

              <v-text-field
                v-model="email"
                label="Email  "
                type="emial"
              ></v-text-field>

              <v-text-field
                v-model="phone"
                label="Phone"
                type="number"
              ></v-text-field>

              <v-select
                v-model="status"
                :items="items"
                label="Status"
              ></v-select>

              <v-btn
                @click="addData()"
                class="my-5 float-right"
                large
                color="primary"
                >Save</v-btn
              >
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'User',
  layout: 'admin/defaultAdmin',
  data() {
    return {
      valid: true,
      firstName: '',
      lastNname: '',
      password: '',
      email: '',
      phone: '',
      status: '',

      /* form static select data */
      items: ['Active', 'Not Active']
    }
  }
}
</script>
