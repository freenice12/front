import Vue from 'vue';
import template from './subscription-component-template.html';

const SubscriptionComponent = Vue.extend({
  template,
  props: [
    'channel',
    'pusher'
  ],
  data() {
    return {
      tweets: []
    }
  },
  watch: {
    'channel.active': function() {
      if (!this.channel.active && this.subscribed) {
        this.unsubscribe();
      } else if (this.channel.active && !this.subscribed) {
        this.subscribeToChannel();
      }
    }
  },
  methods: {
    created() {
      this.subscribeToChannel()
    },
    beforeDestroy() {
      this.unsubscribe();
    },
    subscribeToChannel() {
      this.pusherChannel = this.pusher.subscribe(btoa(this.channel.term));
      this.pusherChannel.bind('new_tweet', (data) => {
        this.newTweet(data); // Don't worry, we haven't defined this func yet!
      });
      this.subscribed = true;
    },
    newTweet(data) {
      this.tweets.push(data);
      this.$nextTick(() => {
        const listItem = document.querySelector(`.channel-${this.channel.term}`);
        listItem.scrollTop = listItem.scrollHeight;
      });
    },
    unsubscribe() {
      this.pusherChannel.unsubscribe(btoa(this.channel.term));
      this.pusherChannel && this.pusherChannel.unbind();
      this.subscribed = false;
    }
  }

});

export default SubscriptionComponent;