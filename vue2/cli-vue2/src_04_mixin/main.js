import Vue from 'vue'
import App from './App.vue'
import {mixin, mixin2} from "@/mixin";

Vue.config.productionTip = false
Vue.mixin(mixin)
Vue.mixin(mixin2)


new Vue({
  render: h => h(App),
  // render(createElement){
  //   return createElement('h1','hello man')
  // }
  //   render:createElement => {
  //   return createElement('h1','hello man')
  // }
  // render:createElement => createElement('h1','hello man')

}).$mount('#app')
