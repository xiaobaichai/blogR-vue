<template>
  <div>
    <b-nav></b-nav>
    <div class="article">
      <div class="article_l">
        <div class="article_title">
          {{article.a_title}}
          <span>{{'/'+article.a_type}}</span>
        </div>
        <div class="article_info">
          <span class="time">{{article.a_time | getDate}}</span>
          <span class="views">{{'阅读/'+article.a_views}}</span>
          <!-- <span class="src">{{article.a_original | isOriginal}}</span> -->
          <span class="writer">{{'文/'+article.a_author}}</span>
        </div>
        <div class="article_desc">{{article.a_desc}}</div>
        <div class="article_content" v-hljs v-html="article.a_content"></div>
      </div>
      <div class="article_r">
        <!-- 特别推荐 -->
        <div class="recommend">
          <p>特别推荐</p>
          <div class="recommend-item">
            <a>
              <div class="title">山河远阔，人间烟火，无一是你，无一不是你。</div>
              <div class="info">
                <span class="time">3 个月内</span>
                <span class="view">浏览 23</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <bottom />
  </div>
</template>

<script>
import BNav from "@/components/content/BNav.vue";
import Bottom from "@/components/content/Bottom.vue";

//引入接口
import { getArticle } from "@/service/index.js";

export default {
  name: "artiPage",
  data() {
    return {
      article: {
        a_author: "",
        a_tags: [],
        _id: "",
        a_title: "",
        a_type: "",
        a_views: 0,
        a_content: "",
        a_desc: "",
        a_id: "",
        a_praise: 0,
        a_original: "",
        a_time: 0
      },
      editorOption: {
        theme: "snow"
      }
    };
  },
  components: { BNav, Bottom },
  methods: {
    reqData() {
      getArticle(this.$route.params.id)
        .then(response => {
          if (response.code == 1) {
            window.location = "http://localhost:3000/404.html";
          } else {
            this.article = response.data;
            console.log(response);
          }
        })
        .catch(err => {
          throw err;
        });
    }
  },
  created() {
    this.reqData();
  }
  // methods: {
  //   reqDate() {
  //     getHomeData()
  //       .then(response => {
  //         this.articles = response.data;
  //         console.log(this.articles);
  //       })
  //       .catch(err => {
  //         throw err;
  //       });
  //   }
  // },
  // created() {
  //   this.reqDate();
  // }
};
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  justify-content: space-between;
  margin: 110px auto 40px;
  width: 1200px;
  .article_l {
    width: 800px;
    .article_title {
      margin-bottom: 6px;
      font-size: 23px;
      font-weight: 700;
      span {
        padding-left: 22px;
        font-size: 12px;
        color: #a8acb3;
      }
    }
    .article_info {
      margin-bottom: 26px;
      font-size: 12px;
      color: #999999;
      span {
        padding-right: 11px;
      }
    }
    .article_desc {
      margin-bottom: 42px;
      padding: 19px 20px 19px 15px;
      background-color: #fafafa;
      color: #666666;
      font-size: 14px;
      line-height: 24px;
    }
    .article_content {
      padding: 0 10px;
      box-sizing: border-box;
      text-align: justify;
      font-size: 14px;
      p {
        font-size: 14px;
        line-height: 30px;
      }
    }
    .article_content ::v-deep pre {
      margin: 10px 0;
      border-radius: 5px;
    }
  }
  .article_r {
    width: 350px;
    .recommend {
      margin-bottom: 40px;
      p {
        font-size: 19px;
        font-weight: 600;
        margin-bottom: 27px;
        color: rgb(78, 61, 235);
      }
      .recommend-item {
        width: 380px;
        border-bottom: 1px solid #eeeeee;
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
</style>

//
<style lang="scss">
// .article_content pre {
//   border-radius: 5px;
//   margin: 10px 0;
// }
//
</style>
