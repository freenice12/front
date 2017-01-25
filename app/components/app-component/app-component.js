import Vue from 'vue';
import template from './app-component-template.html';

const AppComponent = Vue.extend({
  template,
  data() {
    return {
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
    },
    toggleSearch(channel) {
    for (let ch of this.channels) {
      if (ch.term === channel.term) {
        ch.active = !ch.active;
        break;
      }
    }
  },
  clearSearch(channel) {
    this.channels = this.channels.filter((ch) => {
      return ch.term !== channel.term;
    });
  }
  }
});

export default AppComponent;