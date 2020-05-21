<template>
  <div>
    <b-nav></b-nav>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import BNav from "@/components/content/BNav.vue";
import Bottom from "@/components/content/Bottom.vue";

import { mapActions } from "vuex";

export default {
  name: "dashboared",
  components: {
    BNav,
    Bottom
  },
  methods: {
    ...mapActions(["requireTokenAsync"])
  },
  mounted() {
    this.requireTokenAsync();
  }
};
</script>

<style lang="scss" scoped></style>
