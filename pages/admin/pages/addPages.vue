<template>
  <div>
    <v-row class="form pt-0">
      <v-col class="pt-0">
        <v-row>
          <v-col outlined class="head">
            <h4 class="font-weight-light text-light">Add Page</h4>
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

              <v-btn @click="addData()" class="my-5 float-right" large color="primary">Save</v-btn>
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
    setStatus() {
      return this.status === "Active" ? "Y" : "N";
    },
    setShowTitle() {
      return this.showTitle === "Yes" ? "Y" : "N";
    },
    addData() {
      const form = {
        title: this.title,
        menuTitle: this.menuTitle,
        showTitle: this.setShowTitle(),
        seoUrl: this.seoUrl,
        pageDescription: this.pageDescription,
        metaTitle: this.metaTitle,
        metaKeyword: this.metaKeyword,
        metaDescription: this.metaDescription,
        displayOrder: this.displayOrder,
        status: this.setStatus()
      };
      if (this.$store.dispatch("admin/page/addpage", form)) {
        this.$router.push("/admin/pages");
      }
    }
  }
};
</script>
