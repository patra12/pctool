<template>
  <div>
    <h1>count : {{count}}</h1>

    <v-btn @click="add()">add 1</v-btn>
    <v-btn @click="sub()">subtract 1</v-btn>
    <hr />
    <div class="py-5" v-for="page in pageData" :key="page.pageId">
      <p>{{page.title}}</p>
      <v-btn @click="deldata(page.pageId)" color="blue">Delete {{page.pageId}}</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      pageData: state => state.again.pagex,
      count: state => state.again.counter
    })
  },
  methods: {
    ...mapMutations({
      add: "again/increment",
      sub: "again/decrement"
    }),
    async deldata(idx) {
      await this.$store.dispatch("again/delete", { id: idx });
    }
  },
  async fetch({ store }) {
    await store.dispatch("again/getpageData");
  }
};
</script>