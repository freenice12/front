# front

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
