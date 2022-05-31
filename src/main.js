import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import store from './store/index'
import App from './App.vue'
import api from './api';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 自己定义的全局 样式和替换element的样式
import './assets/css/index.scss';
import './assets/css/element-ui.scss';

// 需要全局引入再添加
import SvgIcon from './components/SvgIcon.vue' // 全局svg图标组件



//获取资料库是否完成初始化
store.dispatch('getConfig');

router.beforeEach((to, from ,next) => {
  const username = store.getters.user.username;
  const configFlag = store.getters.configFlag;
  const envs = store.getters.envs;
  console.log(configFlag, username, store.getters.token)
  // next()
  // if(!configFlag && to.path !== '/startConfig'){
  //   next('/startConfig')
  // }else if(configFlag && !username && ['/login', '/register'].includes(to.path)){
  //   next()
  // }else if(configFlag && !username && !['/login', '/register'].includes(to.path)){
  //   next('/login')
  // }else{
  //   if(configFlag && to.path === '/startConfig' || configFlag && username && to.path === '/login'){
  //     next(from.path)
  //   }else if(configFlag && username && !envs.length &&  to.path !== '/env'){
  //     next('/env')
  //   }else{
  //     next()
  //   }
  // }


  const whiteList = [ '/register', '/404', '/500'];
  if(!configFlag){
    next('/startConfig')
  }else{
    if(whiteList.indexOf(to.path) !== -1) {
      next()
    }else{
      if(!username){
        if(to.path !== '/login'){
          next('/login')
        }else{
          next()
        }

      }else{
        if(envs.length){
          next()
        }else{
          next('/env')
        }

      }
    }


  }
})

// axios.defaults.headers['Authentication-Token'] = store.state.token;


const app = createApp(App);

// Object.keys(ElementPlusIconsVue).forEach( key => {
//   app.component(ElementPlusIconsVue[key].name, ElementPlusIconsVue[key])
// })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


// 全局挂载
app.config.globalProperties.$axios = api;

app
  .use(ElementPlus, {
    size: 'small',
    zIndex: 3000
  })
  .use(store)
  .use(router)
  .component('svg-icon', SvgIcon)
  .mount('#app');


