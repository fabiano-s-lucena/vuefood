require('./bootstrap')
require ('./plugins/index')

import Vue from 'vue'
import BaseTemplate from './layouts/BaseTemplate'
import router from './routes'
import store from './store'

Vue.config.productionTip = false

/**
 * Gobal Components
 */

Vue.component('preload-component', () => import('./components/Preloader'))
new Vue({
  render: h => h(BaseTemplate),
  router,
  store
}).$mount('#app')

store.dispatch('getMe')
  