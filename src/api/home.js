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
  },

  // 获取登录用户的环境
  getEnvs(params){
    if(params){
      return axios.get(`/envs?env_name=${params}`);
    }else{
      return axios.get('/envs');
    }

  },

  //创建环境
  createEnv(data){
    return axios.post('/env', data);
  },

  // 更新环境
  updateEnv(id, data){
    return axios.put( `/env/${id}`, data );
  },

  // 删除环境
  deleteEnv(id){
    return axios.delete( `/env/${id}` );
  }

}
