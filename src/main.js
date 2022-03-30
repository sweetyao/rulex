import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import store from './store/index'
import App from './App.vue'


router.beforeEach((to, from ,next) => {
  const username = store.getters.user.username
  const startConfig = store.getters.startConfig
  if(!startConfig && to.path !== '/startConfig'){
    next('/startConfig')
  }else if(startConfig && !username && to.path !== '/login'){
    next('/login')
  }else{
    if(startConfig && to.path === '/startConfig' || startConfig && username && to.path === '/login'){
      next(from.path)
    }else{
      next()
    }
  }
})


const app = createApp(App)
app.use(ElementPlus, {
  size: 'small',
  zIndex: 3000
}).use(store)
  .use(router)
  .mount('#app')


