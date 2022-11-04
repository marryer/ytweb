// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入element组件库
import ElementUI from 'element-ui'
// 引入组件库样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// 使用App组件
Vue.use(ElementUI)

new Vue({
  el:'#app',
  render: h => h(App),
})
