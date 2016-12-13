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