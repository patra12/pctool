<template>
  <div>
    <v-row class="form pt-0">
      <v-col class="pt-0">
        <v-row>
          <v-col outlined class="head">
            <h4 class="font-weight-light text-light">Edit Category</h4>
            <nuxt-link to="/admin/category">
              <v-icon title="back" class="right" color="white darken-1">mdi-arrow-left-bold</v-icon>
            </nuxt-link>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="bg-content">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="categoryName" label="Category Name"></v-text-field>

              <v-text-field v-model="seoUrl" label="seo URL"></v-text-field>

              <!-- <p class="grey--text text--darken-1 pt-3 mb-0">Category Description</p>

              <div v-model="categoryDescription" v-quill:page class="quill-editor"></div> -->

              <v-text-field v-model="metaTitle" label="Meta title"></v-text-field>

              <v-text-field v-model="metaKeyword" label="Meta keyword"></v-text-field>

              <p class="grey--text text--darken-1 pt-3 mb-0">Meta Description</p>

              <div v-model="metaDescription" v-quill:meta class="quill-editor"></div>

              <input
                class="pt-3"
                type="file"
                ref="categoryimage"
                @change="onFileChange"
                name="categoryimage"
              />

              <img class="py-5 ctategory-image-selection" :src="show_image" alt="no image is found" />

              <!-- <v-text-field v-model="bannerImageLoc" label="Banner Image Location"></v-text-field>

              <v-text-field v-model="displayOrder" type="number" label="Display Order"></v-text-field>-->

              <v-select v-model="status" :items="items" label="Status"></v-select>

              <v-btn @click="putData()" class="my-5 float-right" large color="primary">Save</v-btn>
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
    categoryName: "",
    seoUrl: "",
    categoryDescription: "",
    metaTitle: "",
    metaKeyword: "",
    metaDescription: "",

    //for holding and sendind file to db
    categoryImage: "",

    //for showing image after selecting image
    showCategoryImage: "",

    // bannerImageLoc: "",
    // displayOrder: "",
    status: "",

    //for showing image comming from db and also when selecting
    show_image: "",

    // form static input type select data
    items: ["Active", "Not Active"]
  }),

  methods: {
    onFileChange() {
      const file = this.$refs.categoryimage.files[0];
      this.categoryImage = file;
      this.show_image = URL.createObjectURL(file);
    },
    getStatus() {
      return this.status === "Active" ? "Y" : "N";
    },
    setStatus(status) {
      status === "Y" ? (this.status = "Active") : (this.status = "Not Active");
    },
    parseImage(imageName) {
      return process.env.BASE_URL + "/category/" + imageName;
    },
    putData() {
      const form = new FormData();
      form.append("categoryname", this.categoryName);
      form.append("seourl", this.seoUrl);
      form.append("description", this.categoryDescription);
      form.append("metatitle", this.metaTitle);
      form.append("metakeywords", this.metaKeyword);
      form.append("metadescription", this.metaDescription);
      form.append("categoryimage", this.categoryImage);
      form.append("bannerimageloc", this.bannerImageLoc);
      form.append("displayorder", this.displayOrder);
      form.append("status", this.getStatus());

      //to check all appended data

      // for (var datax of form.entries()) {
      //   console.log(datax[0], "=>", datax[1]);
      // }

      this.$axios({
        url: "/putcategory/" + this.$route.params.id,
        method: "PUT",
        headers: {
          header: { "Content-Type": "multipart/form-data" }
        },
        data: form
      })
        .then(res => {
          this.$router.push({
            path: "/admin/category"
          });
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    getData() {
      this.$axios({
        url: "/monocategory/" + this.$route.params.id,
        method: "get"
      })
        .then(res => {
          this.categoryName = res.data[0].categoryname;
          this.seoUrl = res.data[0].seourl;
          this.categoryDescription = res.data[0].description;
          this.metaTitle = res.data[0].metatitle;
          this.metaKeyword = res.data[0].metakeywords;
          this.metaDescription = res.data[0].metadescription;

          //if image is found in db then image will be parsed
          //otherwise it will assign empty

          this.show_image =
            res.data[0].categoryimage != null
              ? this.parseImage(res.data[0].categoryimage)
              : "";

          this.bannerImageLoc = res.data[0].bannerimageloc;
          this.displayOrder = res.data[0].displayorder;
          this.setStatus(res.data[0].status);

          console.log(process.env.BASE_URL);
          console.log(process.env);
          console.log(process);
        })
        .catch(err => {
          // handle error
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>