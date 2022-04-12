import {createRouter, createWebHashHistory} from 'vue-router'
import Layout from '../layout/index.vue'


const routes = [{
  path: '/startConfig',
  name: 'StartConfig',
  component: () => import('../views/startConfig/index.vue')
},{
  path: '/login',
  name: 'Login',
  component: () => import('../views/login/index.vue')
},{
  path: '/register',
  name: 'Register',
  component: () => import('../views/login/register.vue')
},{
  path: '/',
  name: 'Layout',
  component: Layout,
  redirect: 'dashboard',
  children: [{
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      title: '首页'
    },
    component: () => import('../views/dashboard/index.vue')
  }, {
    path: '/task',
    name: 'Task',
    meta: {
      title: '任务'
    },
    component: () => import('../views/task/index.vue')
  }, {
    path: '/database',
    name: 'Database',
    meta: {
      title: '数据源'
    },
    component: () => import('../views/database/index.vue')
  }, {
    path: '/library',
    name: 'Library',
    meta: {
      title: '用例库'
    },
    component: () => import('../views/library/index.vue')
  }]
},{
  path: '/404',
  component: () => import('../views/404.vue')
},{
  path: '/:pathMatch(.*)*',
  redirect: '/404'
}]



const router = createRouter({
  //  内部提供了 history 模式的实现。我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
})



export default router
