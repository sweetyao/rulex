import axios from './axios'

export default{
  // 判断资料库是否初始化
  isInitialized(){
    return axios.get('/db/initialized');
  },

  // 初始化资料库
  initDb(data){
    return axios.post('/db/init', data);
  },

  // 登录
  login(data){
    return axios.post('/login', data);
  },

  // 注册
  register(data){
    return axios.post('/register', data);
  }

}
