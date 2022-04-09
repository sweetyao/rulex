import axios from './axios'

export default{
  //判断资料库是否初始化
  login(data){
    return axios.post('/login', data);
  }


}
