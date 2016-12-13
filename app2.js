'use strict'

// 步骤
//
// - 1）const StaticPlugin = require('.')
// - 2）Slet.plugin(StaticPlugin)
// - 3) app.static()

const StaticPlugin = require('.')

const Slet = require('slet')

const app = new Slet({
  root: __dirname,
  debug: false
})

// add plugin
app.plugin(StaticPlugin)

// lazy load plugin
app.static()

// app.start(3005)
module.exports = app
