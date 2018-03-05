// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
// import $ from 'jquery'
// window.$ = require('jquery')
// window.jQuery = require('jquery')
// import '/bootstrap/dist/css/bootstrap.css'

// import 'bootstrap/dist/js/bootstrap.min.js'
// require('bootstrap')
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.filter('my-filter', function (value) {
  return value+".00"
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
