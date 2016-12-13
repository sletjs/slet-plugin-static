# slet-plugin-static


[![NPM version](https://img.shields.io/npm/v/slet-plugin-static.svg?style=flat-square)](https://www.npmjs.com/package/slet-plugin-static)
[![Build](https://travis-ci.org/sletjs/slet-plugin-static.svg?branch=master)](https://travis-ci.org/sletjs/slet-plugin-static)
[![codecov.io](https://codecov.io/github/sletjs/slet-plugin-static/coverage.svg?branch=master)](https://codecov.io/github/sletjs/slet-plugin-static?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

内置static方法，包含3个功能

- app.static()
  - app.gzip()
  - app.etag()
  - app.serve()

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

步骤

- 1）const StaticPlugin = require('.')
- 2）Slet.plugin(StaticPlugin)
- 3) app.static()

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
