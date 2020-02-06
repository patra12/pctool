<template>
  <div class="container">
    <div class="row login-container">
      <div class="col-md-4 col-12 mx-auto">
        <div class="card">
          <article class="card-body">
            <p class="card-title pb-1">Reset your password</p>
            <small>
              Enter your user account's verified email
              address and we will send you a password reset link.
            </small>
            <form class="pt-3">
              <div class="form-group">
                <input
                  name
                  class="form-control"
                  placeholder="Enter your email address "
                  type="email"
                />
              </div>
              <div class="form-group">
                <nuxt-link
                  to="/signin"
                  class="btn btnLogin btn-block text-light"
                >Send email to reset password</nuxt-link>
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