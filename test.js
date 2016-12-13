import test from 'ava'

var app = require('./app')
var sletTest = require('slettest')

test.cb('GET / Slet.plugin(StaticPlugin)', t => {
  sletTest(app)
    .get('/')
    .expect(200, function (err, res) {
      t.ifError(err)
      // console.log(res)
      t.is(res.text, '<h2>2222</h2>', 'get text from public/index.html')
      t.end()
    })
})

var app2 = require('./app2')

test.cb('GET / app.plugin(StaticPlugin)', t => {
  sletTest(app2)
    .get('/')
    .expect(200, function (err, res) {
      t.ifError(err)
      // console.log(res)
      t.is(res.text, '<h2>2222</h2>', 'get text from public/index.html')
      t.end()
    })
})
