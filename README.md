# slet-plugin-static

## Install

```
$ npm i -S slet-plugin-static
```

## Usages

```
'use strict'

const StaticPlugin = require('.')

const Slet = require('slet')

// 经典用法
Slet.plugin(StaticPlugin)

const app = new Slet({
  root: __dirname,
  debug: false
})

// lazy load plugin
app.static()

// app.start(3005)
module.exports = app

```

## 参数

```
const app = new Slet({
  root: __dirname,
  debug: false,
  static: {
    path: this.opts.root + '/public',
    opts: {} // https://github.com/koajs/static#options
  }
})
```

- path即static server的目录，默认是当前目录下的public目录

更多参见：https://github.com/koajs/static#options
