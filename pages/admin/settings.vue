<template>
  <div class="settings pt-0">
    <v-row>
      <v-col class="pt-0">
        <v-row>
          <v-col
            outlined
            class="bg"
          >
            <h4 class="font-weight-light">Settings</h4>
          </v-col>
        </v-row>
        <v-row class="border">
          <v-col class="bg-content">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="siteName"
                :rules="siteNameRules"
                label="Site Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="siteUrl"
                :rules="siteUrlRules"
                label="Site URL"
                required
              ></v-text-field>

              <v-text-field
                v-model="adminEmail"
                :rules="adminEmailRules"
                label="Admin Email"
                required
              ></v-text-field>

              <v-text-field
                v-model="paypalEmail"
                label="Paypal Email"
                required
              ></v-text-field>

              <v-text-field
                v-model="results"
                :rules="resultsRules"
                label="Results"
                required
              ></v-text-field>
              <v-text-field
                v-model="address"
                label="Address"
                required
              ></v-text-field>
              <v-text-field
                v-model="phone"
                label="Phone"
                required
              ></v-text-field>
              <v-text-field
                v-model="homeMetaTitle"
                label="Home Meta Title"
                required
              ></v-text-field>
              <v-text-field
                v-model="homeMetaKeyword"
                label="Home Meta Keyword"
                required
              ></v-text-field>
              <v-text-field
                v-model="ganalytyc"
                label="Google Analytics"
                required
              ></v-text-field>
              <v-text-field
                v-model="fbUrl"
                :rules="fbUrlRules"
                label="Facebook URL"
                required
              ></v-text-field>
              <v-text-field
                v-model="instagramUrl"
                :rules="instagramUrlRules"
                label="Instagram URL"
                required
              ></v-text-field>

              <p style="color:blue;">{{ message }}</p>

              <v-btn
                class="my-5 float-right"
                large
                color="primary"
                @click="updateSettings()"
              >Update</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}
      <v-btn
        color="blue"
        text
        @click="snackbar = false"
      >Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "Settings",
  layout: "admin/defaultAdmin",
  data () {
    return {
      valid: true,
      message: "",
      // email: '',
      // emailRules: [(v) => !!v || 'Title is email'],
      siteName: "",
      siteNameRules: [v => !!v || "Site title is Required"],
      siteUrl: "",
      siteUrlRules: [v => !!v || "Site URl is Required"],
      adminEmail: "",
      adminEmailRules: [v => !!v || "Admin Email is Required"],
      paypalEmail: "",
      paypalEmailRules: [v => !!v || "Paypal Email is Required"],
      results: "",
      resultsRules: [v => !!v || "Results is required"],
      address: "",
      addressRules: [v => !!v || "Address is required"],
      phone: "",
      phoneRules: [v => !!v || "Phone is required"],
      homeMetaTitle: "",
      // homeMetaTitleRules: [(v) => !!v || 'Home Meta-Title is required'],
      homeMetaKeyword: "",
      // homeMetaKeywordRules: [(v) => !!v || 'Home Meta Keyword is required'],
      homeMetaDescription: "",
      ganalytyc: "",
      // ganalytycRules: [(v) => !!v || 'ganalytyc is required'],
      fbUrl: "",
      fbUrlRules: [v => !!v || "Facebook URL is required"],
      instagramUrl: "",
      instagramUrlRules: [v => !!v || "Instagram URL is required"],

      // SNACK BAR
      snackbar: false,
      text: "Data is Updated",
      timeout: 2000
    };
  },
  methods: {
    fetchSettings () {
      this.$axios({
        method: "GET",
        url: "/getSetings"
      })
        .then(res => {
          this.siteName = res.data[0].site_name;
          this.siteUrl = res.data[0].site_url;
          this.adminEmail = res.data[0].admin_email;
          this.paypalEmail = res.data[0].paypal_email;
          this.results = res.data[0].results;
          this.address = res.data[0].address;
          this.phone = res.data[0].phone;
          this.homeMetaTitle = res.data[0].homemetatitle;
          this.homeMetaKeyword = res.data[0].homemetakeyword;
          // this.paypalEmailRules = res.data[0].site_name;
          this.ganalytyc = res.data[0].ganalytyc;
          this.fbUrl = res.data[0].fburl;
          this.instagramUrl = res.data[0].instagramurl;
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateSettings () {
      this.$axios({
        method: "PUT",
        url: "/updateSetings",
        data: {
          site_name: this.siteName,
          site_url: this.siteUrl,
          admin_email: this.adminEmail,
          paypal_email: this.paypalEmail,
          results: this.results,
          address: this.address,
          phone: this.phone,
          homemetatitle: this.homeMetaTitle,
          homemetakeyword: this.homeMetaKeyword,
          homemetadescription: "",
          ganalytyc: this.ganalytyc,
          fburl: this.fbUrl,
          instagramurl: this.instagramUrl
        }
      })
        .then(res => {
          console.log();
          this.snackbar = !this.snackbar;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted () {
    this.fetchSettings();
  }
};
</script>
