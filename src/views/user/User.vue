<template>
  <div class="profile">
    <!-- 登陆状态 -->
    <div class="user" v-if="token">
      <div class="user_l">
        <img class="avatar" :src="user_info.avatarSrc" alt width="100" height="100" />
        <p class="user_name">{{user_info.name}}</p>
        <p class="user_sign">
          <span>个人简介:</span>
          {{user_info.sign}}
        </p>
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

export default {
  name: "user",
  components: { Login },
  computed: {
    ...mapState(["token", "user_info"])
  }
};
</script>

<style lang='scss' scoped>
.profile {
  margin-top: 110px;
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
    }
  }
}
</style>
