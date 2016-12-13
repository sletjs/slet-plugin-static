'use strict'

module.exports = class StaticPlugin {

  static () {
    if (!this.opts.static) {
      this.opts.static = {
        path: this.opts.root + '/public',
        opts: {} // https://github.com/koajs/static#options
      }
    }

    this.gzip()
    this.etag()
    this.serve()
  }

  serve () {
    if (!this.opts.static) {
      this.opts.static = {
        path: this.opts.root + '/public',
        opts: {} // https://github.com/koajs/static#options
      }
    }

    this.use(require('koa-static')(this.opts.static.path, this.opts.static.opts))
  }

  etag () {
    if (!this.opts.static.etag) {
      this.opts.static.etag = {
      }
    }

    var conditional = require('koa-conditional-get')
    var etag = require('koa-etag')

    this.use(conditional())
    this.use(etag())
  }

  gzip () {
    if (!this.opts.static.gzip) {
      this.opts.static.gzip = {
        filter: function (contentType) {
          return /text/i.test(contentType)
        },
        threshold: 2048,
        flush: require('zlib').Z_SYNC_FLUSH
      }
    }
    var compress = require('koa-compress')
    this.use(compress())
  }

}
