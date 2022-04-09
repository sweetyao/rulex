import axios from './axios'

export default{
  //判断资料库是否初始化
  isInitialized(){
    return axios.get('/db/initialized');
  },

  initDb(data){
    return axios.post('/db/init', data);
  }

}
