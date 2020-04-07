import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueMouseFollower from 'vue-mousefollower'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueMouseFollower,
  render: h => h(App)
}).$mount('#app')
