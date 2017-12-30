import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import login from '@/components/login'
import signup from '@/components/signup'
import dashboard from '@/components/dashboard'
import task from '@/components/task/task'
import todo from '@/components/todo/todo'
import navigation from './navigation'
import FBSignInButton from 'vue-facebook-signin-button'

Vue.use(Router)
Vue.use(FBSignInButton)
Vue.use(Vuex)


const router = new Router({
  linkActiveClass : 'is-active',
  mode : 'history', 
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: login,
      beforeEnter : navigation.globalNavigation
    },
    {
      path : '/dashboard',
      name : 'dashboardPage',
      component: dashboard,
      beforeEnter : navigation.authNavigation,
    },
    {
      path : '/signup',
      name : 'signupPage',
      component: signup,
      beforeEnter : navigation.globalNavigation,
    },
    {
      path : '/task',
      name : 'taskPage',
      component : task,
      beforeEnter : navigation.authNavigation
    },
    {
      path : '/todo',
      name : 'todoPage',
      component : todo,
      beforeEnter : navigation.authNavigation
    },
  ]
})

// router.beforeEach((to, from, next) =>{
//   if(to.name == 'loginPage' || to.name == 'signup'){
//     if(!localStorage.getItem('token')){
//       next()
//     }else{
//       next({
//         name : 'todoPage'
//       })
//     }
//   }else{
//     if(localStorage.getItem('token')){
//       next()
//     }else{
//       next({
//         name : 'loginPage'
//       })
//     }
//   }
// })
export default router