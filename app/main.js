import Vue from 'vue';
Vue.config.debug = true;

import AppComponent from './components/app-component/app-component';
// .components/app-component/app-component is using in index.html

new Vue({
  el: '#app',
  components: {
    'app-component': AppComponent
  },
  data: {
  }
});