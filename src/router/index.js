import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home';
import Header from '../components/Header';
// 懒加载 ----页面主
const Index = resolve => require(['@/components/Home'], resolve)


Vue.use(Router)

export default new Router({
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production',
  routes: [
    { path: '/', component: Index},
    {
      path:"/Home",
      name:Home,
      component:Home
    },
    {
      path:"/Header",
      name:Header,
      component:Header
    }
  ]
})
