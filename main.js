import Vue from 'vue'
import App from './App'
import {myRequest} from './util/api.js'

Vue.config.productionTip = false
Vue.prototype.$myRequest = myRequest

Vue.prototype.serverUrl = "http://226cf6bc.nat2.nsloop.com/"

App.mpType = 'app'



const app = new Vue({
    ...App
})
app.$mount()
