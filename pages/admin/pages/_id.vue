<template>
  <div>
    <v-row class="form pt-0">
      <v-col class="pt-0">
        <v-row>
          <v-col
            outlined
            class="head"
          >
            <h4 class="font-weight-light text-light">Edit Page</h4>
            <nuxt-link to="/admin/pages">
              <v-icon
                title="back"
                class="right"
                color="white darken-1"
              >mdi-arrow-left-bold</v-icon>
            </nuxt-link>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="bg-content">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="title"
                label="Title"
              ></v-text-field>

              <v-text-field
                v-model="menuTitle"
                label="Menu Title"
              ></v-text-field>

              <v-select
                :items="showTitleItems"
                v-model="showTitle"
                label="Show Title"
              ></v-select>

              <v-text-field
                v-model="seoUrl"
                label="seo URL"
              ></v-text-field>

              <p class="grey--text text--darken-1 pt-3 mb-0">Page Description</p>

              <div
                v-model="pageDescription"
                v-quill:page
                class="quill-editor"
              ></div>

              <v-text-field
                v-model="metaTitle"
                label="Meta title"
              ></v-text-field>

              <v-text-field
                v-model="metaKeyword"
                label="Meta keyword"
              ></v-text-field>

              <p class="grey--text text--darken-1 pt-3 mb-0">Meta Description</p>

              <div
                v-model="metaDescription"
                v-quill:meta
                class="quill-editor"
              ></div>

              <v-text-field
                v-model="displayOrder"
                type="number"
                label="Display Order"
              ></v-text-field>

              <v-select
                :items="statusItems"
                v-model="status"
                label="Status"
              ></v-select>

              <v-btn
                @click="putData()"
                class="my-5 float-right"
                large
                color="primary"
              >Update</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
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

  /**
   * we can fetch getters diffrent ways
   * i found this tow type is crutial for everything
   * ----------------------------------------
   * calling getter from diffrent module without mapgetter
   * -----------------------------------------------------
   * let data = this.$store.getters["admin/page/findPage"](id);
   *
   * calling getter from diffrent module mapgetter
   * -----------------------------------------------
   * let data_mod = this.findPagex(id);
   */
  computed: {
    ...mapGetters({ findPagex: "admin/page/findPage" })
  },
  methods: {
    getStatus () {
      return this.status === "Active" ? "Y" : "N";
    },
    setStatus (status) {
      var change_status = status === "Y" ? "Active" : "Not Active";
      this.status = change_status;
    },
    getShowTitle () {
      return this.showTitle === "Yes" ? "Y" : "N";
    },
    setShowTitle (status) {
      var changed_status = status === "Y" ? "Yes" : "No";
      this.showTitle = changed_status;
    },
    //for edit data in page using state
    putData () {
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

      this.$store.dispatch("admin/page/editpage", {
        id: this.$route.params.id,
        data: {
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
        }
      });

      this.$router.push("/admin/pages");
    },

    //get single page data from state
    singlePage () {
      let id = this.$route.params.id;
      let pageData = this.findPagex(id);

      (this.id = pageData.pageId),
        (this.title = pageData.title),
        (this.menuTitle = pageData.menutitle),
        this.setShowTitle(pageData.showtitle),
        (this.seoUrl = pageData.seourl),
        (this.pageDescription = pageData.description),
        (this.metaTitle = pageData.metatitle),
        (this.metaKeyword = pageData.metakeyword),
        (this.metaDescription = pageData.metadescription),
        (this.displayOrder = pageData.displayorder),
        this.setStatus(pageData.status);
    }
  },

  //for loading data during page reloding
  async fetch ({ store }) {
    await store.dispatch("admin/page/getPageData");
  },
  mounted () {
    this.singlePage();
  }
};
</script>
