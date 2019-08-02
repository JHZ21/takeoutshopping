import axios from "axios";

// 对axios get,post请假进行了抽象，
// 对返回数据做了处理，
// 但对axios后续操作形式不变

export default function myAxios(url = "", data = {}, type = "GET") {
  return new Promise(function(resolve, reject) {
    let promise;
    if (type.toUpperCase() === "GET") {
      let dataStr = "";
      Object.keys(data).forEach(key => {
        dataStr += key + "=" + data[key] + "&";
      });
      if (dataStr !== "") {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
        url += url + "?" + dataStr;
      }
      // 发送 get 请求
      promise = axios.get(url);
    } else {
      promise = axios.post(url, data);
    }
    // 处理 axios 请求结果
    promise
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
