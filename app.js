'use strict'

// 步骤
//
// - 1）const StaticPlugin = require('.')
// - 2）Slet.plugin(StaticPlugin)
// - 3) app.static()

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
