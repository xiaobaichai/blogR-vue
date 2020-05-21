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
export const getCategoryData = (type, page) => ajax(BASE_URL + "/api/category", { type, page });

//留言板接口==============================================================
export const getMsg = (count, page) => ajax(BASE_URL + "/api/getMsg", { count, page });
export const leaveMessage = (nickname, email, content) => ajax(BASE_URL + "/api/leaveMsg", { nickname, email, content }, "POST"); //POST
export const resMsg = (id, res) => ajax(BASE_URL + "/api/resMsg", { id, res }, "POST");

//资源推荐接口============================================================
export const getRecommendData = () => ajax(BASE_URL + "/api/recommend");

//登录接口===============================================================
export const login = (name, pwd) => ajax(BASE_URL + "/api/login", { name, pwd }, "POST");

//进入站点时请求token
export const requireToken = () => ajax(BASE_URL + "/api/requireToken");

//注册接口
export const regist = (name, pwd) => ajax(BASE_URL + "/api/regist", { name, pwd }, "POST");

//博文详情页==============================================================
export const getArticle = (id) => ajax(BASE_URL + "/api/article", { id });

//搜索页面================================================================
export const getSearchTag = (tag) => ajax(BASE_URL + "/api/searchTag", { tag });
export const getSearchKeyword = (keyword) => ajax(BASE_URL + "/api/searchKeyword", { keyword });
