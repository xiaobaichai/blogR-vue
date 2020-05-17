import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//按需加载组件
const Home = () => import("@/views/home/Home.vue");
const Category = () => import("@/views/category/Category.vue");
const Recommend = () => import("@/views/recommend/Recommend.vue");
const Message = () => import("@/views/message/Message.vue");
const User = () => import("@/views/user/User.vue");
const Dashboard = () => import("@/views/dashboard/Dashboard.vue");
const ArtiPage = () => import("@/views/article/ArtiPage.vue");
const SearchTag = () => import("@/views/searchTag/SearchTag.vue");
const SearchKeyword = () => import("@/views/searchKeyword/SearchKeyword.vue");
const ResMsg = () => import("@/views/resMsg/ResMsg.vue");

const Editor = () => import("@/components/commen/Editor");

const routes = [
  { path: "/", redirect: "/dashboard" },
  //导航部分
  {
    path: "/dashboard",
    name: "dashboard",
    redirect: "dashboard/home",
    component: Dashboard,
    children: [
      { path: "home", name: "home", component: Home },
      { path: "category", name: "category", component: Category },
      { path: "recommend", name: "recommend", component: Recommend },
      { path: "message", name: "message", component: Message },
      { path: "user", name: "user", component: User },
    ],
  },
  //文章详情页面
  {
    path: "/article/:id",
    name: "artiPage",
    component: ArtiPage,
  },
  //标签搜索/文章详情页面
  {
    path: "/searchTag/:tag",
    name: "searchTag",
    component: SearchTag,
  },
  //关键字搜索/文章详情页面
  {
    path: "/searchKeyword/:keyword",
    name: "searchKeyword",
    component: SearchKeyword,
  },
  //文章编辑页面
  {
    path: "/editor",
    name: "editor",
    component: Editor,
  },
  //回复留言页面
  {
    path: "/resMsg",
    name: "resMsg",
    component: ResMsg,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
