<template>
  <div class="uploadCarousel">
    <form @submit.prevent="upload" ref="form" enctype="multipart/form-data">
      文章id：
      <input name="link" />
      <input type="file" name="file" />
      <input type="submit" value="提交" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "uploadCarousel",
  methods: {
    upload() {
      let formData = new FormData(this.$refs.form);
      axios({
        method: "post",
        url: "http://localhost:3000/api/uploadCarousel",
        data: formData
      }).then(response => {
        window.location.reload();
        console.log(response);
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.uploadCarousel {
  width: 1200px;
  margin: 0 auto;
  input {
    display: block;
    margin-bottom: 15px;
  }
  .el-input {
    margin: 15px 0;
    width: 20%;
  }
}
</style>
