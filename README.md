# matisha-vue

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/matisha-vue)
[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/matisha-vue)
[![matisha-vue](https://img.shields.io/badge/matisha-vue-0.0.3-brightgreen.svg)](https://www.npmjs.com/package/matisha-vue)

## Build Setup

``` bash
# install dependencies
npm i matisha-vue --save

# serve with hot reload at localhost:8080
npm run dev / npm start

# build for production
npm run dist:dev

# build for production with minification
npm run dist:prod
```

## Quick Start

``` bash
# global imports
import Vue from 'vue'
import MatishaVue from 'matisha-vue'
Vue.use(MatishaVue)

# needs imports way1
import Vue from 'vue'
import { MtsMenu } from 'matisha-vue'
Vue.use(MtsMenu);

# needs imports way2
import Vue from 'vue'
import { MtsMenu } from 'matisha-vue'
Vue.component('MtsMenu', MtsMenu);
```
