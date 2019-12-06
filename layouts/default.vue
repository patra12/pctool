<template>
  <v-app>
    <Header />

    <div>
      <nuxt />
    </div>

    <Footer />
  </v-app>
</template>

<script>
// import "bootstrap/dist/css/bootstrap.css";
import Header from './front/header'
import Footer from './front/footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
