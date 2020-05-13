<template>
  <div class="recommend">
    <div class="category_outer">
      <ul class="recommend_category">
        <li>资源</li>
      </ul>
    </div>
    <div class="recommend_list">
      <div class="recommend_item"></div>
      <div class="recommend_item"></div>
      <div class="recommend_item"></div>
      <div class="recommend_item"></div>
      <div class="recommend_item"></div>
      <div class="recommend_item"></div>
      <div class="recommend_item"></div>
      <div class="recommend_item"></div>
      <div class="recommend_item"></div>
      <div class="recommend_item"></div>
      <div class="recommend_item"></div>
      <div class="recommend_item"></div>
      <div class="recommend_item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: ""
};
</script>

<style lang='scss' scoped>
.recommend {
  margin-top: 110px;
  .category_outer {
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eeeeee;
    border-top: 1px solid #eeeeee;
    .recommend_category {
      display: flex;
      justify-content: center;
      li {
        height: 60px;
        line-height: 60px;
        padding: 0 22px;
      }
    }
  }
  .recommend_list {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    margin: 0 auto;
    .recommend_item {
      margin-bottom: 18px;
      margin-right: 18px;
      width: 380px;
      height: 180px;
      border: 1px solid #eeeeee;
    }
  }
}
</style>
