import Vue from 'vue'
import App from './App.vue'
//부트스트랩 import 여기서 해야함

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
