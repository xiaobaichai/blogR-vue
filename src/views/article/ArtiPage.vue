<template>
  <div>
    <b-nav></b-nav>
    <div class="article">
      <div class="article_l">
        <div class="article_title">
          自己动手封装一个Element-ui自定义可配置全局公用table组件
          <span>/Vue</span>
        </div>
        <div class="article_info">
          <span class="time">3 个月内</span>
          <span class="views">阅读/36</span>
          <span class="src">来源/原创</span>
          <span class="writer">文/虾仁</span>
        </div>
        <div class="article_desc">最近在工作中大哥让我修改一下所有页面的table组件 ，要求自己封装一个table组件，减少代码冗余。我们都知道后台便利系统需要大量用到table组件，每次都写基本相同的样式，会使得代码变得臃肿，所以自己对element-ui中的table组件进行二次封装。</div>
        <div class="article_content" v-hljs v-html="content"></div>
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

export default {
  name: "artiPage",
  data() {
    return {
      content: `<p><span style="color: rgb(34, 34, 34);">最近在个人博客中发表博文需要富文本编辑器，最终选择了较为轻量以与vue配合使用比较方便的vue-quill-edtior。但是在使用的地方也有一些问题需要自己配置，例如图片上传等等。</span></p><p><br></p><pre class="ql-syntax" spellcheck="false">import&nbsp;VueQuillEditor&nbsp;from&nbsp;'vue-quill-editor'
import&nbsp;'quill/dist/quill.core.css'
import&nbsp;'quill/dist/quill.snow.css'
import&nbsp;'quill/dist/quill.bubble.css'

//重写图片上传函数
const&nbsp;handlers&nbsp;=&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;image:&nbsp;function&nbsp;image()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var&nbsp;self&nbsp;=&nbsp;this
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var&nbsp;fileInput&nbsp;=&nbsp;this.container.querySelector('input.ql-image[type=file]')
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(fileInput&nbsp;===&nbsp;null)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput&nbsp;=&nbsp;document.createElement('input')
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.setAttribute('type',&nbsp;'file')
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;设置图片参数名
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(uploadConfig.name)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.setAttribute('name',&nbsp;uploadConfig.name)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;可设置上传图片的格式
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.setAttribute('accept',&nbsp;uploadConfig.accept)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.classList.add('ql-image')
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;监听选择文件
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.addEventListener('change',&nbsp;()&nbsp;=&gt;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;创建formData
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var&nbsp;formData&nbsp;=&nbsp;new&nbsp;FormData()
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;formData.append(uploadConfig.name,&nbsp;fileInput.files[0])
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;formData.append('object',&nbsp;'product')
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;config&nbsp;=&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;headers:&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Content-Type':&nbsp;'multipart/form-data'
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                //使用axios，如果你在项目中未使用axios，可以使用原生AJAX进行上传
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;window.axios.post(uploadConfig.action,&nbsp;formData,&nbsp;config)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.then((res)&nbsp;=&gt;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(res.data.code&nbsp;===&nbsp;200)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;length&nbsp;=&nbsp;self.quill.getSelection(true).index
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;这里很重要，你图片上传成功后，img的src需要在这里添加，res.path就是你服务器返回的图片链接。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.quill.insertEmbed(length,&nbsp;'image',&nbsp;res.data.url)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.quill.setSelection(length&nbsp;+&nbsp;1)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.value&nbsp;=&nbsp;''
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.$message.error('图片上传失败')
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}).catch((_err)&nbsp;=&gt;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.$message.error('图片上传失败'&nbsp;+&nbsp;_err)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.container.appendChild(fileInput)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileInput.click()
&nbsp;&nbsp;&nbsp;&nbsp;}
}

export&nbsp;default&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;placeholder:&nbsp;'快来说点什么吧~', 
&nbsp;&nbsp;&nbsp;&nbsp;theme:&nbsp;'snow',&nbsp;//&nbsp;主题
&nbsp;&nbsp;&nbsp;&nbsp;modules:&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;toolbar:&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;container:&nbsp;toolOptions,&nbsp;//&nbsp;工具栏选项
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;handlers:&nbsp;handlers
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;syntax:&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;highlight:&nbsp;text&nbsp;=&gt;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;window.hljs.highlightAuto(text).value&nbsp;//&nbsp;这里就是代码高亮需要配置的地方
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
}
</pre><p><br></p><p><br></p><p><br></p><h1 class="ql-align-justify"><strong>5.配置代码高亮</strong></h1><p class="ql-align-justify"><span style="color: rgb(34, 34, 34);">使用vue-quill-edtior插入的代码块html结构是pre，要想页面上显示代码高亮我们需要highlight.js这个包，所以npm下载在main.js引入即可。</span></p><p><br></p><p><br></p>`,
      editorOption: {
        theme: "snow",
      },
    };
  },
  components: { BNav, Bottom },
};
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  justify-content: space-between;
  margin: 110px auto 0;
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
