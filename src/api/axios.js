import axios from 'axios'
import store from '../store/index'

const instance = axios.create({
  // 如果url不是绝对路径，那么会将baseURL和url拼接作为请求的接口地址
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  //超时时间
  timeout: 1000,
  // 跨域请求时发送 cookies， 允许跨域携带cookie信息
  withCredentials: true
});



// 添加请求拦截器
instance.interceptors.request.use(
  // 在发送请求之前做些什么
  config => {
    // 根据请求方法构建请求参数和数据
    config.headers = {
      Authorization: store.getters.token || '',
      'Content-Type':  'application/json;charset=UTF-8'
    };
    return config;
  },
  // 对请求错误做些什么
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  // 对响应数据做点什么
  response => {
    return Promise.resolve(response.data);
  },
  // 对响应错误做点什么
  error => {
    const response = error.response;
    switch(response.status){
      case 401:
        ElMessage.error('未经许可，需要通过HTTP认证');
        break;
      case 404:
        ElMessage.error('服务器上无法找到请求的资源');
        break;
      case 500:
        ElMessage.error('服务器在执行请求时发生了错误服务器在执行请求时发生了错误');
        break;
    }
    return Promise.reject(error);

  }
);

export default instance;
