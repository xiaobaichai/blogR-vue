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

const Editor = () => import("@/components/commen/Editor");

const routes = [
  { path: "/", redirect: "/dashboard" },
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
  {
    path: "/editor",
    name: "editor",
    component: Editor,
  },
  {
    path: "/article",
    name: "artiPage",
    component: ArtiPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
