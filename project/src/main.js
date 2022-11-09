// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入element组件库
import ElementUI from 'element-ui'
// 引入组件库样式
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import router from './router/index'

Vue.config.productionTip = false
// 使用App组件
Vue.use(ElementUI)
Vue.use(VueRouter)
// Vue.use(router)

new Vue({
  el:'#app',
  router:router,
  render: h => h(App),
  // 安装全局事件总线
beforeCreate(){
  Vue.prototype.$bus = this
}
})
