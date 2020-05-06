<template>
  <div class="footer">
    <!-- <div class="footer-nav">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>技术分类</li>
        <li>留言板</li>
        <li>资源推荐</li>
      </ul>
    </div>-->
    <div
      class="footer-copyright"
    >Copyright © codelin.site . All Rights Reserved. Designed by CodeLin. 蒙ICP备19003034号</div>
  </div>
</template>

<script>
export default {
  name: "bottom"
};
</script>

<style lang='scss' scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: rgba(236, 236, 236, 0.685);
  .footer-copyright {
    padding: 20px 0 30px 0;
    text-align: center;
    font-size: 13px;
    color: #bdcee0;
  }
}
</style>
