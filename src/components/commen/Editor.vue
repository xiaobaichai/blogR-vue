<template>
  <div class="edit_container">
    <div class="edit_title">
      文章标题：
      <el-input v-model="title"></el-input>
    </div>
    <div class="edit_author">
      作者：
      <el-input v-model="author"></el-input>
    </div>
    <div class="edit_tags">
      标签：
      <el-input v-model="tempTag" placeholder="回车或点击空白处添加标签，点击标签删除标签" @change="addTag"></el-input>
      <span v-for="(item,index) in tags" :key="index" @click="deleteTag(index)">{{item}}</span>
    </div>
    <div class="edit_original">
      <el-radio v-model="original" label="true">原创</el-radio>
      <el-radio v-model="original" label="false">转载</el-radio>
    </div>
    <div class="edit_category">
      <el-radio v-model="category" label="javascript">javascript</el-radio>
      <el-radio v-model="category" label="Vue">Vue</el-radio>
      <el-radio v-model="category" label="Node">Node</el-radio>
      <el-radio v-model="category" label="Html/Css">Html/Css</el-radio>
      <el-radio v-model="category" label="其他">其他</el-radio>
    </div>
    <div class="edit_desc">
      描述：
      <el-input type="textarea" :rows="4" v-model="description"></el-input>
    </div>

    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
    <button v-on:click="postContent">提交</button>
  </div>
</template>

<script>
//引入编辑器接口
import { postArticle, getTest } from "../../service/index";

export default {
  name: "editor",
  data() {
    return {
      title: "",
      author: "",
      tempTag: "",
      tags: [],
      original: "",
      category: "",
      description: "",
      content: ``,
      editorOption: {
        theme: "snow"
      }
    };
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  methods: {
    // onEditorReady(editor) {
    //   // 准备编辑器
    // },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    //提交博文信息
    postContent(event) {
      postArticle(
        this.title,
        this.author,
        this.tags,
        this.original,
        this.category,
        this.description,
        this.content
      )
        .then(response => {
          (this.title = ""),
            (this.author = ""),
            (this.tags = null),
            (this.original = ""),
            (this.category = ""),
            (this.description = ""),
            (this.content = ``);
          console.log(response.data);
        })
        .catch(error => {
          throw error;
        });
    },
    //提交标签tags
    addTag() {
      this.tags.push(this.tempTag);
      this.tempTag = "";
    },
    //删除标签
    deleteTag(index) {
      this.tags.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.edit_container {
  width: 800px;
  margin: 0 auto;
  .edit_title,
  .edit_author,
  .edit_original,
  .edit_category,
  .edit_desc,
  .edit_tags {
    margin-bottom: 15px;
    span {
      display: inline-block;
      margin-top: 3px;
      margin-right: 15px;
      padding: 4px 9px;
      background-color: rgb(216, 216, 216);
      border-radius: 4px;
      color: rgb(67, 64, 224);
      cursor: pointer;
      font-size: 13px;
    }
  }
}
.edit_container ::v-deep .el-input__inner {
  display: inline;
}
</style>
