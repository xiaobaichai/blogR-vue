<template>
  <div class="home-content">
    <!-- 轮播图 -->
    <div class="carousel">
      <div class="carousel-l">
        <el-carousel height="330px">
          <el-carousel-item v-for="item in carousel" :key="item.id">
            <img :src="item.src" alt width="790" height="330" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="carousel-r">
        <div class="search">
          <div class="search-tag">
            <span>热门标签</span>
            <a>小程序</a>
            <a>面试</a>
          </div>
          <div class="search-input">
            <i class="el-icon-search"></i>
            <input type="text" />
          </div>
        </div>
        <div class="search-img">
          <img src="../../assets/img/home/search.jpg" alt />
        </div>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <div class="content-l">
        <p>#最新内容</p>
        <item-info />
      </div>
      <div class="content-r">
        <!-- 热门板块 -->
        <div class="hot">
          <p>热门板块</p>
          <div class="hot-item">
            <a>
              <div class="title">山河远阔，人间烟火，无一是你，无一不是你。</div>
              <div class="info">
                <span class="time">3 个月内</span>
                <span class="view">浏览 23</span>
              </div>
            </a>
          </div>
        </div>
        <!-- 热门标签 -->
        <div class="tags">
          <p>热门标签</p>
          <ul>
            <li>分析</li>
            <li>源</li>
            <li>源码分析</li>
            <li>码分析</li>
            <li>源码</li>
            <li>源码分析</li>
            <li>源码分</li>
          </ul>
        </div>
        <!-- 最新留言 -->
        <div class="msg">
          <p>最新留言</p>
          <div class="msg-item">
            <div class="msg-time">2020/04/29 21:59:35</div>
            <div class="msg-content">
              <div class="user-content">
                <span>冉迪：</span>申请友链，已添加贵站 站点：http://www.zihanzy.com 名称：唐子涵的个人博客
              </div>
              <div class="admin-content">
                <span>管理员：</span>已添加了，昨天忙及时回复，请重新添加本站友链，欢迎多来窜窜~
              </div>
            </div>
          </div>
        </div>
        <!-- 博客推荐 -->
        <div class="blog">
          <p>友链推荐</p>
          <ul>
            <li>blog</li>
            <li>博客</li>
            <li>博客博客</li>
            <li>博客析</li>
            <li>源博客码</li>
            <li>源码分博客析</li>
            <li>博客分</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemInfo from "@/components/content/ItemInfo.vue";

export default {
  name: "",
  data() {
    return {
      carousel: [
        { id: 0, src: require("../../assets/img/carousel1.jpg") },
        { id: 1, src: require("../../assets/img/carousel2.jpg") },
        { id: 2, src: require("../../assets/img/carousel3.jpg") }
      ]
    };
  },
  components: {
    ItemInfo
  }
};
</script>

<style lang="scss" scoped>
.home-content {
  width: 1200px;
  margin: 0 auto;
  //轮播图板块
  .carousel {
    margin-top: 110px;
    margin-bottom: 30px;
    display: flex;
    .carousel-l {
      width: 790px;
      height: 330px;
      margin-right: 10px;
      border-radius: 4px;
      box-shadow: 0 5px 8px 0 rgba(7, 17, 27, 0.3);
    }
    .carousel-r {
      width: 400px;
      height: 330px;
      border-radius: 4px;
      box-shadow: 0 5px 8px 0 rgba(7, 17, 27, 0.3);
      .search {
        box-sizing: border-box;
        width: 100%;
        height: 100px;
        padding-top: 12px;
        .search-tag {
          margin-bottom: 12px;
          span {
            margin: 0 10px 0 20px;
            font-size: 16px;
            font-weight: 600;
            color: rgb(125, 94, 240);
          }
          a {
            margin-right: 9px;
            font-size: 14px;
            color: #999999;
          }
        }
        .search-input {
          position: relative;
          width: 350px;
          height: 40px;
          padding-left: 15px;
          i {
            position: absolute;
            left: 30px;
            top: 12px;
            color: #c2cad3;
            font-size: 16px;
          }
          input {
            width: 330px;
            height: 40px;
            padding-left: 35px;
            border-radius: 20px;
            background: #fafafa;
            outline: none;
            border: none;
          }
        }
      }
      .search-img {
        width: 100%;
        height: 230px;
        img {
          border-radius: 0 0 4px 4px;
        }
      }
    }
  }
  .content {
    width: 100%;
    margin: 0 auto;
    display: flex;
    .content-l {
      width: 790px;
      margin-right: 10px;
      p {
        font-size: 19px;
        font-weight: 700;
        margin-bottom: 24px;
      }
    }
    .content-r {
      width: 400px;
      padding-left: 20px;
      //热门板块
      .hot {
        margin-bottom: 40px;
        p {
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 27px;
          color: rgb(78, 61, 235);
        }
        .hot-item {
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
      //人们标签
      .tags {
        margin-bottom: 27px;
        p {
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 27px;
          color: rgb(78, 61, 235);
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            padding: 10px 22px;
            margin: 0 15px 15px 0;
            border-radius: 10px;
            border: 1px solid transparent;
            text-align: center;
            font-size: 13px;
            color: rgb(102, 105, 105);
            background-color: #fafafa;
          }
          li:hover {
            border-color: #00a8ff;
            color: #00a8ff;
            cursor: pointer;
          }
        }
      }
      // 最近留言
      .msg {
        p {
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 27px;
          color: rgb(78, 61, 235);
        }
        .msg-item {
          margin-bottom: 22px;
          width: 380px;
          border-bottom: 1px dashed #cccccc;
          .msg-time {
            margin-bottom: 10px;
            font-size: 13px;
            color: #999999;
          }
          .msg-content {
            box-sizing: border-box;
            margin-bottom: 15px;
            width: 380px;
            padding: 16px 18px 16px 11px;
            border-left: 3px solid #cccccc;
            background-color: #fafafa;
            .user-content {
              font-size: 14px;
              margin-bottom: 12px;
              span {
                font-weight: 600;
                color: rgb(36, 139, 207);
              }
            }
            .admin-content {
              font-size: 14px;
              span {
                font-weight: 600;
                color: rgb(36, 139, 207);
              }
            }
          }
        }
      }
      // 友链推荐
      .blog {
        margin-bottom: 27px;
        p {
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 27px;
          color: rgb(78, 61, 235);
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            padding: 10px 22px;
            margin: 0 14px 10px 0;
            border-radius: 6px;
            border: 1px solid #eeeeee;
            box-shadow: 0 0 3px #eee;
            font-size: 12px;
            font-weight: 700;
          }
          li:hover {
            color: #00a8ff;
            cursor: pointer;
            background-color: #fafafa;
          }
        }
      }
    }
  }
}
</style>
