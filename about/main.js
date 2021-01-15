import Vue from 'vue'
import Index from './index.vue'

import { isProduction } from '@/config'
Vue.config.productionTip = isProduction

new Vue({
  render: h => h(Index)
}).$mount('#app')
