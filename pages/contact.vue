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
              <!-- <p>3 rue des Champs Elysées</p>
              <p>75008 PARIS</p>
              <p>France</p>
              <p>Email : email@example.com</p>
              <p>Tel. +33 12 56 11 51 84</p> -->

              <p>{{contactData.address}}</p>
              <p>Email : <a href="mailto:pctool@example.com">{{contactData.admin_email}}</a></p>
              <p>Tel :{{contactData.phone}}</p>
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
                  <input
                    type="text"
                    @change="checkName()"
                    class="form-control"
                    id="name"
                    v-model="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter name"
                  >
                  <section class="pt-3 black-gra text-danger">{{nameError}}</section>
                </div>
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    v-model="email"
                    @change="checkEmail()"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                  >
                  <section
                    v-if="emailError"
                    class="pt-3 black-gra text-danger"
                  >{{emailError}}</section>
                  <small
                    v-else
                    id="emailHelp"
                    class="form-text text-muted"
                  >We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    v-model="message"
                    @change="checkMessage()"
                    class="form-control"
                    id="message"
                    rows="4"
                    required
                  ></textarea>
                  <section class="pt-3 black-gra text-danger">{{messageError}}</section>
                </div>
                <div class="float-right">
                  <div
                    @click="sendmail()"
                    class="btn btnSend"
                  >Submit</div>
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
  components: {},
  data () {
    return {
      test: "",
      contactData: "",
      error: 0,
      // validation data
      name: "",
      nameError: "",
      email: "",
      emailError: "",
      message: "",
      messageError: ""
    }
  },
  methods: {
    async getContactData () {
      const serverData = await this.$axios.get("/getsetings");
      this.contactData = serverData.data[0];
    },
    //for validation
    checkName () {
      if (this.name == "") {
        this.nameError = "Name is required.";
        this.error++;
      } else if (this.name.length < 5) {
        this.nameError = "Name must be more thean 5 chracters.";
        this.error++;
      } else {
        this.nameError = "";
        this.error = 0;
      }
      console.log(this.error);
    },
    checkEmail () {
      if (this.email == "") {
        this.emailError = "Emial is required.";
        this.error++;
      } else {
        this.emailError = "";
        this.error = 0;
      }
      console.log(this.error);
    },
    checkMessage () {
      if (this.message == "") {
        this.error++;
        this.messageError = "message is required.";
      } else if (this.message.length < 20) {
        this.messageError = "message must be more than 20 cheracter.";
        this.error++;
      } else {
        this.messageError = "";
        this.error = 0;
      }
      console.log(this.error);
    },

    //for sending mail
    sendmail () {
      this.checkName();
      this.checkEmail();
      this.checkMessage();
      if (this.error == 0) {
        var mailData = {
          name: this.name,
          email: this.email,
          message: this.message
        };
        this.$axios({
          method: "post",
          url: "/sendMail",
          data: mailData
        })
          .then(res => {
            (this.name = ""),
              (this.email = ""),
              (this.message = ""),
              (this.mail_delevery = res.data);
            alert(res.data);
          })
          .catch(error => {
            // handle error
            console.log(error);
          });
      }
    }
  },
  mounted () {
    this.getContactData();
  }
};
</script>
<style>
.jumbo-Tron {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("~assets/image/contact-bg.jpg");
  background-size: 100%;
  padding: 8rem 0;
  border-radius: none !important;
  background-position: bottom center;
}
.jumbo-Tron h1 {
  text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.4);
  color: #fff;
}
.jumbo-Tron p {
  color: rgb(7, 7, 7);
}
.bgGray {
  background: #333;
}
.bgRed {
  background: #d23940;
}
.btnSend {
  background: #d23940;
  border: #d23940;
  color: #fff;
  cursor: pointer;
}
.btnSend:hover {
  background: #ac131b;
  border: #ac131b;
  color: #fff;
}
</style>