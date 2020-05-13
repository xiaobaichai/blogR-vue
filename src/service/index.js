import ajax from "./ajax";

//定义基础路径
const BASE_URL = "http://localhost:3000";

//Edition编辑接口=========================================================
export const postArticle = (title, author, tags, original, type, description, content) => ajax(BASE_URL + "/api/edition", { title, author, tags, original, type, description, content }, "POST");

//首页接口=================================================================
export const getHomeLately = () => ajax(BASE_URL + "/api/home/lately");
export const getHomeHot = () => ajax(BASE_URL + "/api/home/hot");
export const getHomeTags = () => ajax(BASE_URL + "/api/home/tags");

//技术分类接口=============================================================
export const getCategoryData = () => ajax(BASE_URL + "/api/category");
export const getCategoryCss = () => ajax(BASE_URL + "/api/category/css");
export const getCategoryJavascript = () => ajax(BASE_URL + "/api/category/javascript");
export const getCategoryNode = () => ajax(BASE_URL + "/api/category/node");
export const getCategoryVue = () => ajax(BASE_URL + "/api/category/vue");
export const getCategoryOther = () => ajax(BASE_URL + "/api/category/other");
//分页请求

//留言板接口==============================================================
export const getMsgData = () => ajax(BASE_URL + "/api/msg");
export const leaveMessage = (nickName, msg) => ajax(BASE_URL + "/api/leaveMsg", { nickName, msg }, "POST"); //POST

//资源推荐接口============================================================
export const getRecommendData = () => ajax(BASE_URL + "/api/recommend");
//。。。

//博文详情页==============================================================
export const getArticle = (id) => ajax(BASE_URL + "/api/article", { id });
