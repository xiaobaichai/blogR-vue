<template>
  <div class="profile">
    <!-- 登陆状态 -->
    <div class="user" v-if="token">
      <div class="user_l">
        <img class="avatar" :src="user_info.avatarSrc" alt width="100" height="100" />
        <p class="user_name">{{ user_info.name }}</p>
        <p class="user_sign">
          <span>个人简介:</span>
          {{ user_info.sign }}
        </p>
        <div class="logOut" @click="logOut">退出登录</div>
        <div class="operation" v-show="user_info.name === 'randy'">
          <router-link to="/editor" target="_blank" class="edition">文章上传</router-link>
          <router-link to="/resMsg" target="_blank" class="resMsg">留言回复</router-link>
          <router-link to="/uploadCarousel" target="_blank" class="uploadCarousel">上传轮播图</router-link>
        </div>
      </div>
      <div class="user_r">
        <p>未完待续。。。</p>
      </div>
    </div>
    <!-- 未登录状态 -->
    <login v-else></login>
  </div>
</template>

<script>
//引入组件
import Login from "../login/Login";

import { mapState } from "vuex";

import { logout } from "@/service/index.js";

export default {
  name: "user",
  components: { Login },
  computed: {
    ...mapState(["token", "user_info"]),
  },
  methods: {
    logOut() {
      logout()
        .then((response) => {
          if (response.code === 0) {
            window.location.reload();
          }
        })
        .catch((err) => {
          throw err;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  .user {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 400px;
    margin: 0 auto;
    .user_l {
      box-sizing: border-box;
      padding: 20px 20px;
      width: 350px;
      background-color: #fff;
      border-radius: 5px;
      .logOut {
        box-sizing: border-box;
        width: 80px;
        text-align: center;
        margin: 15px auto;
        padding: 6px 0;
        font-size: 14px;
        background-color: rgb(69, 173, 243);
        border-radius: 4px;
        color: rgb(241, 241, 241);
        cursor: pointer;
      }
      .operation {
        text-align: center;
        a {
          display: block;
          padding: 8px 10px;
          margin: 5px auto;
          width: 50%;
          background-color: rgb(236, 236, 236);
          border-radius: 4px;
          font-size: 14px;
          color: rgb(138, 136, 136);
        }
        a:hover {
          background-color: rgb(196, 248, 248);
          color: rgb(7, 7, 7);
        }
      }
      .avatar {
        display: block;
        margin: 0 auto;
        margin-bottom: 15px;
        border-radius: 50%;
      }
      .user_name {
        margin-bottom: 15px;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
      }
      .user_sign {
        margin-bottom: 20px;
        text-align: center;
        font-size: 12px;
        color: rgb(163, 158, 158);
        span {
          color: rgb(24, 198, 241);
        }
      }
    }
    .user_r {
      width: 800px;
      background-color: #fff;
      border-radius: 5px;
      // border-left: 1px solid #ebe9e9;
      box-sizing: border-box;
      padding: 10px 0 0 10px;
      color: rgb(141, 141, 141);
    }
  }
}
</style>
