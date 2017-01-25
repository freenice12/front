import Vue from 'vue';
import Pusher from 'pusher-js';
import template from './app-component-template.html';
import SubscriptionComponent from '../subscription-component/subscription-component';

const AppComponent = Vue.extend({
  template,
  components: {
    'subscription-component': SubscriptionComponent
  },
  created() {
    this.pusher = new Pusher('myPusherKey');
  },
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