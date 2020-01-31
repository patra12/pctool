<template>
  <div class="container">
    <div class="row login-container">
      <div class="col-md-4 col-12 mx-auto">
        <div class="card">
          <article class="card-body">
            <nuxt-link to="/register" class="float-right btn btnSignup">Sign up</nuxt-link>
            <p class="card-title">Sign in</p>
            <hr />
            <form>
              <div class="form-group">
                <input name class="form-control" placeholder="Email or login" type="email" />
              </div>
              <div class="form-group">
                <input class="form-control" placeholder="******" type="password" />
              </div>
              <div class="row">
                <div class="col-md-6">
                  <a class="small" href="#">Forgot password?</a>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <button type="submit" class="btn btnLogin btn-block">Login</button>
                  </div>
                </div>
              </div>
            </form>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "none"
};
</script>
<style>
.login-container {
  margin-top: 200px;
}
.card {
  -webkit-box-shadow: 0px 0px 22px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 22px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 22px -10px rgba(0, 0, 0, 0.75);
  margin: 30px 0;
}
.card-title {
  font-size: 20px;
}
.btnLogin {
  background: #d23940;
  border: #d23940;
  color: #fff;
}
.btnLogin:hover {
  background: #ac131b;
  border: #ac131b;
  color: #fff;
}
.btnSignup {
  border: 1px solid #d23940 !important;
  color: #d23940 !important;
}
.btnSignup:hover {
  background: #d23940;
  border: #d23940;
  color: #fff !important;
}
</style>