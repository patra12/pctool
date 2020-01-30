<template>
  <div>

    <section class="jumbo-Tron text-center">
    <div class="container">
        <h1 class="jumbotron-heading">CONTACT PAGE</h1>
        <p class="mb-0">Contact Page build with Vue Nuxt</p>
    </div>
</section>

<div class="container">
    <div class="row">
        
        <div class="col-12 col-sm-4">
            <div class="card bg-light mb-3">
                <div class="card-header bgRed text-white text-uppercase">Address</div>
                <div class="card-body">
                    <p>3 rue des Champs Elysées</p>
                    <p>75008 PARIS</p>
                    <p>France</p>
                    <p>Email : email@example.com</p>
                    <p>Tel. +33 12 56 11 51 84</p>

                </div>

            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-header bgGray text-white">Contact us.</div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea class="form-control" id="message" rows="4" required></textarea>
                        </div>
                        <div class="float-right">
                          <button type="submit" class="btn btnSend">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    
  </div>
</template>
<script>
export default {
  layout: "",
  components: {}
};
</script>
<style>
.jumbo-Tron{
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url("~assets/image/contact-bg.jpg");
    background-size:100%; 
    padding: 8rem 0;
    border-radius:none !important;
    background-position: bottom center;
}
.jumbo-Tron h1{
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.4);
    color: #fff;
}
.jumbo-Tron p{
    color: rgb(7, 7, 7);
}
.bgGray{
  background: #333;
}
.bgRed{
  background: #d23940;
}
.btnSend{
    background: #d23940;
    border: #d23940;
    color: #fff;
}
.btnSend:hover{
    background: #ac131b;
    border: #ac131b;
    color: #fff;
}
</style>