# eview

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/eview)
[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/eview)
[![eview](https://img.shields.io/badge/eview-0.0.3-brightgreen.svg)](https://www.npmjs.com/package/eview)

## Build Setup

``` bash
# install dependencies
npm i eview --save

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
import eview from 'eview'
Vue.use(eview)

# needs imports way1
import Vue from 'vue'
import { etable, eform } from 'eview'
Vue.use(etable);

# needs imports way2
import Vue from 'vue'
import { etable, eform } from 'eview'
Vue.component('etable', etable);
```
