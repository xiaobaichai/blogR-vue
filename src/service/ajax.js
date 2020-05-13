import axios from "axios";

export default function ajax(url = "", params = {}, type = "GET") {
  let promise;

  //返回一个promise对象
  return new Promise((resolve, reject) => {
    //判断请求类型
    if (type.toUpperCase() === "GET") {
      //拼接请求字符串
      let paramsStr = "";
      Object.keys(params).forEach((key) => {
        paramsStr += key + "=" + params[key] + "&";
      });
      //过滤请求字符串最后一个&
      if (paramsStr) {
        paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf("&"));
      }
      //拼接完整请求字符串
      url += "?" + paramsStr;
      //发起get请求
      promise = axios.get(url);
    } else if (type.toUpperCase() === "POST") {
      promise = axios.post(url, params);
    }
    //根据请求结果调用Promise构造函数的resolve或reject来将请求
    //结果传到下一个then()方法或catch()方法的参数中
    promise
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
