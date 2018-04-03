<p>
    <a href="https://github.com/blackcater"><img alt="logo" width="36" height="36" src="http://oameisqha.bkt.clouddn.com/avatar.png?roundPic/radius/!50p" alt="blackcater">
    </a>
</p>

<h1 align="center">vue-media-query</h1>

<p align="center">A media query component for vue.js</p>

[![CircleCI](https://circleci.com/gh/blackcater/vue-media-query/tree/master.svg?style=svg)](https://circleci.com/gh/blackcater/vue-media-query/tree/master)

[![Coverage Status](https://coveralls.io/repos/github/blackcater/vue-media-query/badge.svg?branch=master)](https://coveralls.io/github/blackcater/vue-media-query?branch=master)

<h2>Install</h2>

```bash
> yarn add vue-media-query --save

> npm install vue-media-query --save
```

<h2>Usage</h2>

```vue
<template>
  <div id="app">
    <h1>demo2</h1>
    <media-query v-model="responsive" :query="query">
      <h2 :style="{wordBreak: 'break-all'}">{{title}}</h2>
    </media-query>
  </div>
</template>

<script>
import MediaQuery from 'vue-media-query'

export default {
  data() {
    return {
      responsive: {},
      query: {
        landscape: { orientation: 'landscape' },
        portrait: { orientation: 'portrait' },
      },
    }
  },
  computed: {
    title() {
      return JSON.stringify(this.responsive)
    },
  },
}
</script>
```

When you change the orientation of device (phone or browser). You can see the result will be changed.

The value of query can also be a [media query string](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) like (max-width: 500px), for more info please see [json2mq](https://github.com/akiran/json2mq/blob/master/README.md#usage) doc.

This project is inspired by [vue-media](https://github.com/egoist/vue-media).

<h2>Browser support</h2>

If you want to support legacy browsers (ie <= 10), please include a window.matchMedia [polyfill](https://github.com/paulirish/matchMedia.js/).

<h2>Contributing</h2>

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

<h2>Author</h2>

**vue-media-query** © [blackcater](https://github.com/blackcater), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by blackcater with help from contributors ([list](https://github.com/blackcater/vue-media-query/contributors)).

> [www.blackcater.win](http://www.blackcater.win) · GitHub [@blackcater](https://github.com/blackcater) · Twitter [@tomtang2015](https://twitter.com/tomtang2015)
