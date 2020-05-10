import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入UI组件库Element
import "@/plugins/element.js";

//引入vue-quill-editor富文本编辑器
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
Vue.use(VueQuillEditor);

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
