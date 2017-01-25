import Vue from 'vue';
import template from './app-component-template.html';

const AppComponent = Vue.extend({
  // ES6 shorthand -> template: template = template,
  template,
  data() {
    return  {
      newSearchTerm: '',
      channels: []
    }
  },
  methods: {
    newSubscription() {
      this.channels.push({
        term: this.newSearchTerm,
        active: true
      });
      this.newSearchTerm = '';
    }
  }
});

export default AppComponent;