// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 引入 store
import PlantImage from './components/PlantImage' // 全局的植物图片组件
import { formatMoney } from '@/util' // 金额过滤器
import { Popup, ToastPlugin } from 'vux'
Vue.component('popup', Popup)
Vue.use(ToastPlugin)

Vue.filter('money', (money = 0) => formatMoney(money))
Vue.config.productionTip = false

Vue.component(PlantImage.name, PlantImage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 使用store
  components: { App },
  template: '<App/>'
})
