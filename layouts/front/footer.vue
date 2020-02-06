<template>
  <footer class="footerblock">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="footerLeftLinks">
              <nav class="navbar navbar-expand-sm">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/returnPolicies">Return & Replacement</nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/policieInsurance">Policy Insurance</nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/shippingRate">Shipping Rates</nuxt-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="footerRightLinks">
              <p class="questionText">QUESTIONS?</p>
              <p>CALL US TOLL FREE (000) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footerBottom">
      <div class="container">
        <img src="~/assets/image/pcToolsFooterLogo.png" />

        <div class="copyRight">
          <p>© 2015 - 2020 Pro Construction Tools. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>



<script>
export default {
  name: "SiteFooter"
};
</script>