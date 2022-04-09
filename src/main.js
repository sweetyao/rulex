import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import store from './store/index'
import App from './App.vue'
import api from './api';

// 自己定义的全局 样式和替换element的样式
import './assets/css/index.scss';
import './assets/css/element-ui.scss';

// 需要全局引入再添加
import SvgIcon from './components/SvgIcon.vue' // 全局svg图标组件



//获取资料库是否完成初始化
store.dispatch('getConfig')

router.beforeEach((to, from ,next) => {
  const username = store.getters.user.username
  const configFlag = store.getters.configFlag
  if(!configFlag && to.path !== '/startConfig'){
    next('/startConfig')
  }else if(configFlag && !username && to.path !== '/login'){
    next('/login')
  }else{
    if(configFlag && to.path === '/startConfig' || configFlag && username && to.path === '/login'){
      next(from.path)
    }else{
      next()
    }
  }
})


const app = createApp(App)

// 全局挂载
app.config.globalProperties.$axios = api
// app.config.globalProperties.$ELEMENT = {
//   size: 'small',
//   zIndex: 3000
// }

app
  .use(ElementPlus, {
    size: 'small',
    zIndex: 3000
  })
  .use(store)
  .use(router)
  .component('svg-icon', SvgIcon)
  .mount('#app')


