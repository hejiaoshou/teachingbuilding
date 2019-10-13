import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/iview.js'

Vue.config.productionTip = false

Vue.prototype.shaollowCopy = function(src) {
  let obj = {};
  for(const key in src) {
    if(src.hasOwnProperty(key)){
      obj[key] = src[key];
    }
  }
  return obj;
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
