<template>
  <div class="item-info clearfix">
    <router-link to="/article" tag="a" target="_blank">
      <div class="item-l fl">
        <div class="row-type">
          <span class="type-icon"></span>
          <span class="type-content">Vue</span>
        </div>
        <div class="row-title">自己动手丰衣足食</div>
        <div
          class="row-brief"
        >估计很多人像我一样，都是十七、八岁读过《挪威的森林》，书中围绕着性的描写让人既紧张又慌乱，可还是忍不住往下阅读，直到结束为止。而萦绕于脑海的疑问，比如，木月为什么自杀？直子为什么自杀？渡边君为什么和玲子做四次爱等等，始终没有答案。书中围绕着性的描写让人既紧张又慌乱，可还是忍不住往</div>
        <div class="row-info">
          <span class="info-time">3天前</span>
          <span class="info-view">浏览54</span>
        </div>
      </div>
      <div class="item-r fr">
        <img src="../../assets/img/home/vue.jpg" alt width="132" height="132" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "itemInfo"
};
</script>

<style lang="scss" scoped>
.item-info {
  // display: block;
  margin-bottom: 15px;
  box-sizing: border-box;
  width: 790px;
  padding: 0 20px 29px 10px;
  border-bottom: 1px solid #eeeeee;
  //item左侧简介
  .item-l {
    width: 615px;
    .row-type {
      margin-bottom: 8px;
      .type-icon {
        display: inline-block;
        width: 22px;
        height: 22px;
        background-color: rgb(41, 170, 221);
        border-radius: 50%;
        vertical-align: middle;
      }
    }
    .row-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    .row-brief {
      height: 36px;
      font-size: 12px;
      color: #999999;
      margin-bottom: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .row-info {
      font-size: 12px;
      color: #999999;
      .info-time {
        margin-right: 15px;
      }
    }
    .type-content {
      font-size: 12px;
      margin-left: 8px;
      vertical-align: middle;
    }
  }
  //item右侧图片
  .item-r {
    width: 132px;
    height: 132px;
    img {
      margin-top: 17px;
    }
  }
}
</style>
