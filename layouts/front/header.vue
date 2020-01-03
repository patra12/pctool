<template>
<div class="mainOuter">
<!-- Note -->
<div class="container firstTop">
  <div class="row">
    <div class="leftBlock">
      <div class="wlcomeBlock">
        <img src="~/assets/image/icons/wlc.png" alt="Welcome">
        <p>Welcome to Pro Construction Tools</p>
      </div>
      <div class="addressBlock">
        <img src="~/assets/image/icons/pointer.png" alt="Welcome">
        <p>Address of Pro Construction Tools</p>
      </div>
    </div>
    <div class="rightBlock">
      <div class="signUpBlock">
        <a href="#">login</a>
        <a href="#">signUp</a>
      </div>
    </div>
  </div>
</div>

<!-- Header -->
<div class="container">
  <div class="row vCenter">
    <div class="logoBlock">
      <img src="~/assets/image/pcToolsLogo.png" alt="PC Tools Logo">
    </div>
    <div class="searchblock">
      <form>
        <div class="inner-form">
          <div class="input-field first-wrap">
            <div class="input-select">
              <select data-trigger="" name="choices-single-defaul">
                <option placeholder="">All Category</option>
                <option>New Arrivals</option>
                <option>Sale</option>
                <option>Ladies</option>
                <option>Men</option>
                <option>Clothing</option>
                <option>Footwear</option>
                <option>Accessories</option>
              </select>
            </div>
          </div>
          <div class="input-field second-wrap">
            <input id="search" type="text" placeholder="Enter Keywords?" />
          </div>
          <div class="input-field third-wrap">
            <button class="btn-search" type="button">
              <img src="~/assets/image/icons/seaRch.png" alt="Search Icon">
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="cartSection">
      <div class="cartSectionInner">
      <div class="cartLeft">
        <p>SHOPPING ITEM</p>
        <p>$0.00 <span>0 ITEM</span></p>
      </div>
      <div class="cartRight">
        <img src="~/assets/image/icons/shoppingBag.png" alt="Shopping Bag">
      </div>
      </div>
    </div>
  </div>
</div>

<div class="topnav" id="myTopnav">
  <div class="container">
    <a href="#home" class="active"><img src="~/assets/image/icons/home.png" alt="Home Icon"></a>
    <a href="#news">By Need</a>
    <a href="#contact">By Application</a>
    <a href="#about">By Industry</a>
    <a href="#about">Contact Us</a>
    <a href="javascript:void(0);" class="icon" @click="myFunction()">
      <img src="~/assets/image/icons/sortBar.png" alt="Menu Icon">
    </a>
  </div>
</div>

<!-- The flexible grid (content) -->
<div class="row">
  <div class="side">
    <h2>About Me</h2>
    <h5>Photo of me:</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    <h3>More Text</h3>
    <p>Lorem ipsum dolor sit ame.</p>
    <div class="fakeimg" style="height:60px;">Image</div><br>
    <div class="fakeimg" style="height:60px;">Image</div><br>
    <div class="fakeimg" style="height:60px;">Image</div>
  </div>
  <div class="main">
    <h2>TITLE HEADING</h2>
    <h5>Title description, Dec 7, 2017</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text..</p>
    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    <br>
    <h2>TITLE HEADING</h2>
    <h5>Title description, Sep 2, 2017</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text..</p>
    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
</div>
</template>





<script>
export default {
  name: 'SiteHeader',
  methods:{
     myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  }
}

</script>





<style>
body {
  margin: 0;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #d23940;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 1600px) {
    .container {
        max-width: 1600px;
    }
}
@media (min-width: 1900px) {
    .container {
        max-width: 1900px;
    }
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1180px;
  }
}


.mainOuter {
  box-sizing: border-box;
}

body {
  font-family: Arial;
  margin: 0;
}

.navbar a {
  color: white;
  padding: 14px 20px;
  text-decoration: none;
  text-align: center;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}

.row {  
  display: flex;
  flex-wrap: wrap;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.side {
  flex: 30%;
  background-color: #f1f1f1;
  padding: 20px;
}

.main {
  flex: 70%;
  background-color: white;
  padding: 20px;
}

.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
}

@media screen and (max-width: 700px) {
  .row, .navbar {   
    flex-direction: column;
  }
}

.leftBlock{
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  display: -ms-flexbox;
  display: -webkit-flex;
}
.rightBlock{
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  display: -ms-flexbox;
  display: -webkit-flex;
  justify-content: flex-end;
}
.wlcomeBlock{
  display:flex;
  display: -ms-flexbox;
  display: -webkit-flex;
}
.wlcomeBlock img{
  width: 16px;
  height: 20px;
}
.wlcomeBlock p {
    margin-bottom: 0px;
    margin-left: 5px;
    color: #818384;
    font-size: 14px;
}
.addressBlock{
  display:flex;
  display: -ms-flexbox;
  display: -webkit-flex;
  margin-left: 15px;
}
.addressBlock img{
  width: 16px;
  height: 20px;
}
.addressBlock p {
    margin-bottom: 0px;
    margin-left: 5px;
    color: #818384;
    font-size: 14px;
}
.signUpBlock {  
  display: flex;
  flex-wrap: wrap;
  display: -ms-flexbox;
  display: -webkit-flex;
}

.rightBlock a{
  color: #818384 !important;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
}
.rightBlock a:last-child{
  margin-left: 15px;
}
.rightBlock a:hover{
  border-bottom: 2px solid #818384;
}
.firstTop{
  min-height: 48px;
}
.inner-form{
  display: flex;
  flex-wrap: wrap;
  display: -ms-flexbox;
  display: -webkit-flex;
  position: relative;
}
.logoBlock{
  width: 20%
}
.searchblock{
  width: 60%;
}

.vCenter{
  align-items: center;
}
.first-wrap{
  width: 20%;
}
.first-wrap select{
  width: 100%;
  border: 1px solid #bbbcbd;
  padding:8px 15px;
  border-right: transparent;
}
.second-wrap{
  width: 80%
}
.second-wrap input{
  width: 100%;
  border: 1px solid #bbbcbd;
  padding:8px 15px;
  border-left: transparent;
}
.third-wrap{
  position: absolute;
  right: 0;
  border-left: 1px solid #bbbcbd;
  margin-top: 5px;
  padding-top: 5px;
}
.third-wrap img{
  width: 20px;
  height: 20px;
  margin: 0px 10px;
}
.cartSection{
  width: 20%;
  padding: 0 0 0 15px;
}
.cartLeft p{
  margin-bottom: 0;
  color: #fff;
}
.cartSectionInner{
  background: #0f0977;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  display: -ms-flexbox;
  display: -webkit-flex;
  position: relative;
  justify-content: space-between;
}
.cartRight {
    border-left: 1px solid #fff;
    padding-left: 10px;
    padding-top: 6px;
}
.topnav .container{
  padding: 0
}
.topnav a:first-child{
  padding: 8px 16px;
}
.topnav a{
  color: #fff !important;
}
</style>