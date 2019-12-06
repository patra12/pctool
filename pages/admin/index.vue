<template>
  <div>
    <v-container fill-height fluid grid-list-xl login>
      <v-layout justify-center wrap>
        <v-flex xs12 md6>
          <v-form class="bg pa-10 rounded-card clearfix">
            <h2 class="pb-5">Login</h2>
            <v-text-field
              label="Email address"
              prepend-icon="mdi-account-circle"
              class="purple-input"
            />

            <v-text-field
              type="password"
              label="Password"
              prepend-icon="mdi-lock"
              class="purple-input"
            />

            <nuxt-link to="/admin/dashboard" class="clearfix">
              <v-btn class="float-right my-4" large color="primary">
                Login
              </v-btn>
            </nuxt-link>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'admin/none'
}
</script>
