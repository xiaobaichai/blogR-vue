import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

//引入UI组件库Element
import "@/plugins/element.js";

//引入vue-quill-editor富文本编辑器
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
Vue.use(VueQuillEditor);

//定义全局过滤器
Vue.filter("getDate", function(time) {
  if (!time) return 0;
  let space = (Date.now() - time) / (24 * 3600 * 1000);
  if (Math.floor(space) < 1) {
    return "1 天内";
  }
  return Math.floor(space) + " 天内";
});

//配置代码高亮
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
Vue.directive("hljs", (el) => {
  let highlight = el.querySelectorAll("pre");
  highlight.forEach((block) => {
    hljs.highlightBlock(block);
  });
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
