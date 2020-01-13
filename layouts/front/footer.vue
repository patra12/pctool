<template>
  <footer>
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="footerLeftLinks">
              <nav class="navbar navbar-expand-sm">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Policies: Return & Replacement </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Policy Insurance</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Shipping Rates</a>
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
        <img src="~/assets/image/pcToolsFooterLogo.png">

        <div class="copyRight">
          <p>© 2015 - 2020 Pro Construction Tools. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>



<script>
export default {
  name: 'SiteFooter'
}
</script>
<style>
.footer-top{
  background: #808080;
}
.footerRightLinks{
  float: right;
}
.footerLeftLinks .navbar{
    padding: 0 !important;
  }
 .footerLeftLinks .navbar-nav{
    padding-left:0;
  }
.footerRightLinks p {
    display: inline-block;
}
.footerLeftLinks .nav-item a{
  color: #000;
  transition: all 0.25s ease-in;
}
.footerLeftLinks .nav-item a:hover{
  color: #fff;
}
.questionText{
  font-size: 20px;
  font-weight: 600 !important;
  margin-top: 10px;
  color: #fff;
  margin-right: 15px;
}
.footerRightLinks p{
  margin-bottom: 0;
  color: #fff;
  font-weight: 200;
}
.footerLeftLinks .nav-item{
  border-right: 1px solid #000;
}
.footerLeftLinks .nav-item:last-child{
  border:none;
}
.footerBottom{
  background: #333;
}
.footerBottom img{
  width: 100%;
}
.copyRight p{
  margin-bottom: 0;
  text-align: center;
  color: #fff;
  font-weight: 200;
}
</style>