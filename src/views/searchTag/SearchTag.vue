<template>
  <div>
    <b-nav></b-nav>
    <div class="search">
      <div class="search_result">
        <div class="result_center">
          <p class="tag">{{$route.params.tag}}</p>
          <p class="result">{{'找到了'+articles.length+'条相关博文'}}</p>
        </div>
      </div>
      <div class="search_content">
        <div class="content_l">
          <p>#搜索结果</p>
          <item-article :articles="articles"></item-article>
        </div>
        <div class="content_r"></div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
//引入组件
import BNav from "@/components/content/BNav.vue";
import Bottom from "@/components/content/Bottom.vue";
import ItemArticle from "@/components/content/ItemArticle.vue";

//引入接口
import { getSearchTag } from "@/service/index.js";

export default {
  name: "search",
  data() {
    return {
      articles: []
    };
  },
  components: {
    BNav,
    Bottom,
    ItemArticle
  },
  methods: {
    reqDate() {
      getSearchTag(this.$route.params.tag)
        .then(response => {
          console.log(response);
          this.articles = response.data;
        })
        .catch(err => {
          throw err;
        });
    }
  },
  created() {
    this.reqDate();
  }
};
</script>

<style lang='scss' scoped>
.search {
  margin-top: 100px;
  .search_result {
    margin-bottom: 26px;
    width: 100%;
    height: 90px;
    background-color: rgb(223, 223, 223);
    .result_center {
      box-sizing: border-box;
      width: 1200px;
      margin: 0 auto;
      padding: 18px 0 0 2px;
      .tag {
        margin-bottom: 14px;
        font-size: 18px;
        font-weight: 700;
      }
      .result {
        font-size: 14px;
      }
    }
  }
  .search_content {
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    .content_l {
      width: 790px;
      p {
        font-size: 19px;
        font-weight: 700;
        margin-bottom: 24px;
      }
    }
    .content_r {
      width: 380px;
    }
  }
}
</style>
