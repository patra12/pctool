<template>
  <v-app>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-3">
          <Sidebar />
        </div>
        <div class="col-9">
          <nuxt />
        </div>
      </div>
    </div>
    <Footer />
  </v-app>
</template>

<script>
// import "bootstrap/dist/css/bootstrap.css";
import Header from './header'
import Sidebar from "./sideber"
import Footer from './footer'
export default {
  components: {
    Header,
    Sidebar,
    Footer
  }
}
</script>
