<template>
  <div class="message">
    <div class="message_l">
      <div class="leave_msg">
        <p>留言</p>
        <el-row class="user_info" :gutter="20">
          <el-col :span="12">
            <el-input placeholder="昵称" v-model="nickname"></el-input>
          </el-col>
          <el-col :span="12">
            <el-input placeholder="邮箱" v-model="email"></el-input>
          </el-col>
        </el-row>
        <el-input class="user_msg" placeholder="留言内容" type="textarea" :rows="6" v-model="content"></el-input>
        <el-button class="msg_button" type="primary" style="width:100%" @click="submit">提交留言</el-button>
      </div>
      <div class="new_msg">
        <p>最新留言</p>
        <div class="msg-item" v-for="item in msgs" :key="item.m_time">
          <div class="msg-time">{{item.m_rTime}}</div>
          <div class="msg-content">
            <div class="user-content">
              <span class="nickname">{{item.m_nickname+': '}}</span>
              <span class="msg">{{item.m_content}}</span>
            </div>
            <div class="admin-content">
              <span class="admin">管理员：</span>
              <span class="admin-content">{{item.m_response}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="message_r">
      <div class="message_border">
        <p class="about">关于blogR</p>
        <div class="about_me">
          <p>邮箱</p>
          <p>1750596910@qq.com</p>
          <p>博客</p>
          <p>
            <a href="http://blogR.cn">http://blogR.cn</a>
          </p>
          <p>GitHub</p>
          <p>
            <a href="https://github.com/xiaobaichai" target="_blank">https://github.com/xiaobaichai</a>
          </p>
        </div>
        <div class="description_outer">
          <p class="description">这是一个用于练习和记录的个人博客,我未与其本事也，受人之事，以重相推。此人用之数也。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入接口
import { leaveMessage, getMsg } from "@/service/index.js";

export default {
  name: "message",
  data() {
    return {
      nickname: "",
      email: "",
      content: "",
      msgs: []
    };
  },
  methods: {
    submit() {
      leaveMessage(this.nickname, this.email, this.content)
        .then(response => {
          console.log(response);
          //清空留言
          this.nickname = "";
          this.email = "";
          this.content = "";
        })
        .catch(err => {
          throw err;
        });
    },
    reqData() {
      getMsg(6).then(response => {
        console.log(response);
        this.msgs = response.data;
      });
    }
  },
  created() {
    this.reqData();
  }
};
</script>

<style lang='scss' scoped>
.message {
  margin: 0 auto;
  margin-top: 110px;
  width: 1200px;
  display: flex;
  justify-content: space-around;
  .message_l {
    width: 780px;
    .leave_msg {
      p {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      .user_info {
        margin-bottom: 20px;
      }
      .user_msg {
        margin-bottom: 20px;
      }
      .msg_button {
        margin-bottom: 35px;
      }
    }
    .new_msg {
      // 最近留言
      p {
        font-size: 19px;
        font-weight: 600;
        margin-bottom: 27px;
        // color: rgb(78, 61, 235);
      }
      .msg-item {
        margin-bottom: 22px;
        width: 780px;
        border-bottom: 1px dashed #cccccc;
        .msg-time {
          margin-bottom: 10px;
          font-size: 13px;
          color: #999999;
        }
        .msg-content {
          box-sizing: border-box;
          margin-bottom: 15px;
          width: 780px;
          padding: 16px 18px 16px 11px;
          border-left: 3px solid #cccccc;
          background-color: #fafafa;
          .user-content {
            font-size: 14px;
            margin-bottom: 12px;
            .nickname {
              font-weight: 600;
              color: rgb(36, 139, 207);
            }
            .msg {
              word-break: normal;
              // display: block;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
          }
          .admin-content {
            font-size: 14px;
            .admin {
              font-weight: 600;
              color: rgb(36, 139, 207);
            }
            .admin-content {
              word-break: normal;
              // display: block;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
          }
        }
      }
    }
  }
  .message_r {
    width: 330px;
    .message_border {
      border: 1px solid #eeeeee;
      padding: 23px 29px;
      border-radius: 4px;
      .about {
        font-size: 21px;
        font-weight: 700;
        margin-bottom: 40px;
      }
      .about_me {
        padding: 0 0 20px 20px;
      }
      .about_me :nth-child(odd) {
        font-size: 13px;
        font-weight: normal;
        margin-bottom: 6px;
      }
      .about_me :nth-child(even) {
        font-size: 13px;
        font-weight: 700;
        margin-bottom: 15px;
        a {
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 15px;
        }
      }
      .description_outer {
        padding-top: 20px;
        border-top: 1px solid #eeeeee;
        .description {
          font-size: 13px;
          color: #666666;
          text-indent: 2em;
          line-height: 25px;
        }
      }
    }
  }
}
</style>
