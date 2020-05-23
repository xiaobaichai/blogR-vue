<template>
  <div class="dashboard">
    <b-nav></b-nav>
    <router-view class="container"></router-view>
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

<style lang="scss" scoped>
.dashboard {
  height: 100%;
  .container {
    box-sizing: border-box;
    min-height: 100%;
    padding-top: 110px;
    padding-bottom: 120px;
  }
}
</style>
