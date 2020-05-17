<template>
  <div class="resMsg">
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
          <div class="response">
            <el-input type="textarea" :rows="2" placeholder="回复" v-model="content"></el-input>
            <el-button type="primary" size="small" @click="response($event,item.m_id)">提交</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMsg, resMsg } from "@/service/index.js";

export default {
  name: "resMsg",
  data() {
    return {
      msgs: [],
      content: ""
    };
  },
  methods: {
    reqData() {
      getMsg().then(response => {
        this.msgs = response.data;
      });
    },
    response($event, id) {
      resMsg(id, this.content).then(response => {
        window.location.reload();
        this.content = "";
      });
    }
  },
  created() {
    this.reqData();
  }
};
</script>

<style lang='scss' scoped>
.resMsg {
  width: 1200px;
  margin: 10px auto;
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
      //   width: 780px;
      border-bottom: 1px dashed #cccccc;
      .msg-time {
        margin-bottom: 10px;
        font-size: 13px;
        color: #999999;
      }
      .msg-content {
        box-sizing: border-box;
        margin-bottom: 15px;
        // width: 780px;
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
        .response {
          font-size: 14px;
          .el-textarea {
            margin: 10px 0;
          }
        }
      }
    }
  }
}
</style>
