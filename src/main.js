// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import './filter'
import './styles/common.css'
import './styles/topic.css'
import { LoadingPlugin, AlertPlugin } from 'vux'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab)
config.autoAddCss = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(LoadingPlugin, AlertPlugin)
Vue.prototype.$http = Axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 移除移动端页面点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)
