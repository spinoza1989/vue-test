import { createMemoryHistory, createRouter,createWebHistory } from 'vue-router'

import HomeView from '@/components/Home.vue'
import AboutView from '@/components/about.vue'
import productInfoView from '@/components/productInfo.vue'
import loginView from '@/components/login.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/login', component: loginView },
  { path: '/productInfo', component: productInfoView },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach(to => {
//   // if (!hasNecessaryRoute(to)) {
//   //   router.addRoute(generateRoute(to))
//   //   // 触发重定向
//   //   return to.fullPath
//   // }
//   // 在pinia中获取用户信息
//   // 如果用户信息存在，获取路由信息
//   let userinfo = { name: '小明', age: 18 ,permissions: ['admin'] };
//   if (userinfo) {
//     // 获取路由信息
//     let permissions = userinfo.permissions;
//     // 如果没有权限，跳转到403页面
//     if (permissions.includes('admin')) {
//       router.addRoute({ path: '/productInfo', component: productInfoView })
//     }
//   } else {
//     // 如果没有用户信息，跳转到登录页面
//     router.push('/login');
//   }

// })

export default router
