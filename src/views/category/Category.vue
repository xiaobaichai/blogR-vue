<template>
  <div class="category">
    <div class="category_l">
      <ul class="category_list" ref="category_outer" @click="changeStyle($event)">
        <li>全部</li>
        <li>Css/Html</li>
        <li>JavaScript</li>
        <li>Vue</li>
        <li>Node</li>
        <li>其他</li>
      </ul>
      <item-article :articles="articles"></item-article>
    </div>
    <div class="category_r">
      <div class="hot">
        <p>热门板块</p>
        <router-link :to="'/article/'+id" tag="a" target="_blank" class="hot-item">
          <div class="hot-l">
            <img src alt width="90" height="80" />
          </div>
          <div class="hot_r">
            <a>
              <div class="title">山河远阔，人间烟火，无一是你，无一不是你。</div>
              <div class="info">
                <span class="time">3 个月内</span>
                <span class="view">浏览 23</span>
              </div>
            </a>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ItemArticle from "@/components/content/ItemArticle.vue";
//引入请求接口
import { getCategoryData } from "@/service/index.js";

export default {
  name: "category",
  data() {
    return {
      id: "1234",
      articles: []
    };
  },
  components: {
    ItemArticle
  },
  methods: {
    changeStyle($event) {
      let oUl = this.$refs.category_outer;
      let aLi = oUl.children;
      for (let i = 0; i < aLi.length; i++) {
        aLi[i].style = null;
      }
      let oLi = $event.target;
      oLi.style.fontSize = "16px";
      oLi.style.color = "#409eff";
      oLi.style.fontWeight = "700";
    },
    reqAllData() {
      getCategoryData()
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
    this.reqAllData();
  }
};
</script>

<style lang='scss' scoped>
.category {
  width: 1200px;
  margin: 0 auto;
  margin-top: 110px;
  display: flex;
  justify-content: space-between;
  .category_l {
    width: 800px;
    .category_list {
      margin-bottom: 38px;
      // padding-left: 15px;
      li {
        display: inline-block;
        padding: 0 19px;
        font-size: 13px;
        cursor: pointer;
      }
      li:hover {
        color: #409eff;
      }
    }
  }
  .category_r {
    width: 380px;
    .hot {
      margin-bottom: 40px;
      p {
        font-size: 19px;
        font-weight: 600;
        margin-bottom: 27px;
        color: rgb(78, 61, 235);
      }
      .hot-item {
        display: flex;
        justify-content: space-between;
        width: 380px;
        border-bottom: 1px solid #eeeeee;
        .hot_l {
          box-sizing: border-box;
          width: 95px;
          padding-left: 5px;
        }
        .hot_r {
          width: 245px;
          a {
            display: block;
            .title {
              font-size: 14px;
              font-weight: 600;
              margin-bottom: 13px;
            }
            .info {
              font-size: 13px;
              color: #999999;
              margin-bottom: 14px;
              .time {
                margin-right: 8px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
