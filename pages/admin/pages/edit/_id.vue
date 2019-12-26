<template>
  <div>
    <v-row class="form pt-0">
      <v-col class="pt-0">
        <v-row>
          <v-col outlined class="head">
            <h4 class="font-weight-light text-light">Edit Page</h4>
            <nuxt-link to="/admin/pages">
              <v-icon title="back" class="right" color="white darken-1">mdi-arrow-left-bold</v-icon>
            </nuxt-link>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="bg-content">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="title" label="Title"></v-text-field>

              <v-text-field v-model="menuTitle" label="Menu Title"></v-text-field>

              <v-select :items="showTitleItems" v-model="showTitle" label="Show Title"></v-select>

              <v-text-field v-model="seoUrl" label="seo URL"></v-text-field>

              <p class="grey--text text--darken-1 pt-3 mb-0">Page Description</p>

              <div v-model="pageDescription" v-quill:page class="quill-editor"></div>

              <v-text-field v-model="metaTitle" label="Meta title"></v-text-field>

              <v-text-field v-model="metaKeyword" label="Meta keyword"></v-text-field>

              <p class="grey--text text--darken-1 pt-3 mb-0">Meta Description</p>

              <div v-model="metaDescription" v-quill:meta class="quill-editor"></div>

              <v-text-field v-model="displayOrder" type="number" label="Display Order"></v-text-field>

              <v-select :items="statusItems" v-model="status" label="Status"></v-select>

              <v-btn @click="putData()" class="my-5 float-right" large color="primary">Update</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "AddPages",
  layout: "admin/defaultAdmin",
  data: () => ({
    valid: true,
    id: "",
    title: "",
    menuTitle: "",
    showTitle: "",
    seoUrl: "",
    pageDescription: "",
    metaTitle: "",
    metaKeyword: "",
    metaDescription: "",
    displayOrder: "",
    status: "",

    /* input type select static select data */

    statusItems: ["Active", "Not Active"],

    showTitleItems: ["Yes", "No"]
  }),
  methods: {
    getStatus() {
      return this.status === "Active" ? "Y" : "N";
    },
    setStatus(status) {
      status === "Y" ? (this.status = "Active") : (this.status = "Not Active");
    },
    getShowTitle() {
      return this.showTitle === "Yes" ? "Y" : "N";
    },
    setShowTitle(status) {
      status === "Y" ? (this.showTitle = "Yes") : (this.showTitle = "No");
    },
    putData() {
      const form = {
        title: this.title,
        menuTitle: this.menuTitle,
        showTitle: this.getShowTitle(),
        seoUrl: this.seoUrl,
        pageDescription: this.pageDescription,
        metaTitle: this.metaTitle,
        metaKeyword: this.metaKeyword,
        metaDescription: this.metaDescription,
        displayOrder: this.displayOrder,
        status: this.getStatus()
      };
      this.$axios({
        url: "/putpage/" + this.id,
        method: "PUT",
        headers: {
          header: { "Content-Type": "application/x-www-form-urlencoded" }
        },
        data: form
      })
        .then(res => {
          this.$router.push("/admin/pages");
          console.log(res.data);
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    monoFetch() {
      this.$axios({
        method: "GET",
        url: "/monopage/" + this.$route.params.id
      })
        .then(res => {
          (this.id = res.data[0].pageId),
            (this.title = res.data[0].title),
            (this.menuTitle = res.data[0].menutitle),
            this.setShowTitle(res.data[0].showtitle),
            (this.seoUrl = res.data[0].seourl),
            (this.pageDescription = res.data[0].description),
            (this.metaTitle = res.data[0].metatitle),
            (this.metaKeyword = res.data[0].metakeyword),
            (this.metaDescription = res.data[0].metadescription),
            (this.displayOrder = res.data[0].displayorder),
            this.setStatus(res.data[0].status);
          console.log(res.data);
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.monoFetch();
    console.log("/monouser/" + this.$route.params.id);
  }
};
</script>
