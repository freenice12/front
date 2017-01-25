# front

# https://blog.pusher.com/exploring-real-time-apps-with-vuejs-es2016-and-webpack/

## To use - Webpack & Vue.js

* move to dev folder
* npm init -y
* npm install --save-dev webpack babel-loader babel-preset-es2015 babel-core live-server

* Set config(webpack.config.js), package.json(it provied from npm init -y).

### Install Vue

* npm install --save vue
* create index.html
* create main.js
* create app-component.js
* > webpack -w
* I have got error.... Webpack has not found.
* npm install -g webpack
* > webpack -w
In another tab run ./node_modules/.bin/live-server --port=3004
* > ./node_modules/.bin/live-server --port=3004

I can see anything.
Because Vue.js is running as runtime-only by default.
Need to change it to pre-compile mode
* open webpack.config.js
* add
resolve: {
  alias: {
    'vue$': 'vue/dist/vue.common.js'
  }
}

Now It works! Yeah! :)

### Building the App Component
* create Create app/components/app-component/app-component-template.html
* npm install --save-dev raw-loader
* update to configure the new loader in webpack.config.js
module.exports = {
 ...
  module: {
    loaders: [{
      test: /\.js$/,
     ...
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.html$/,
      loader: 'raw'
    }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
}
* update app-component.js
Have to restart webpack. Whenever add a new plugin.
You can see app-component-template.html contents.

### The subscription component

* Create and modify files below:
app/components/app-component/app-component.js
app/components/subscription-component/subscription-component-template.html
app/components/subscription-component/subscription-component.js

* > npm install --save pusher-js