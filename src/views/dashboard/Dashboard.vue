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

export default {
  name: "dashboared",
  components: {
    BNav,
    Bottom
  }
};
</script>

<style lang="scss" scoped></style>
