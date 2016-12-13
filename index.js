module.exports = class StaticPlugin {

  static() {
    if (!this.opts.static) {
      this.opts.static = {
        path: this.opts.root + '/public',
        opts: {} // https://github.com/koajs/static#options
      }
    }
    
    this.use(require('koa-static')(this.opts.static.path, this.opts.static.opts));
  }
}