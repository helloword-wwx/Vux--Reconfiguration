// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import Qs from 'qs'
import App from './App'
import router from './router'
import store from './store'
import {WechatPlugin, AjaxPlugin, LoadingPlugin, ToastPlugin, AlertPlugin} from 'vux'




/* 加载插件
 */
Vue.use(Vuex)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

/**
 *
 点击延迟(移动端适配)
*/
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}


/**
 *
 日志输出开关
*/
Vue.config.productionTip = false

/**
 * 定义常量
 */
const serverName = 'localhost:3000'

/**
 * 定义全局公用常量
 */
Vue.prototype.serverName = serverName

/**
 *异步请求处理
*/
Vue.prototype.qs = Qs;
Vue.prototype.$http.defaults.baseURL = 'http://elle.shanfengmao.com/Home/';//请求地址
Vue.prototype.$http.defaults.timeout = 5000;//请求超时设置
Vue.prototype.$http.defaults.transformRequest[0] = (data) => {//请求前的数据处理
    if (data instanceof FormData) {
        return data
    } else {
        return Vue.prototype.qs.stringify(data)
    }
}

/**
 *
 全局前置守卫
*/
router.beforeEach(function (to, from, next) {
  // window.scrollTo(0,0)
  store.commit('updateLoading', true)
  store.commit('updateShowBack', true)
  next()
})

/**
 *
 全局后置守卫
*/
router.afterEach(function (to) {
  store.commit('updateLoading', false)
})



/* eslint-disable no-new */
new Vue({
 
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
