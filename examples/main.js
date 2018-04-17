import Vue from 'vue'

import App from './App'

import { MtsMenu } from '../src/main';

Vue.component('MtsMenu', MtsMenu);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
