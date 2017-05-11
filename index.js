'use strict'

const _ = require('lodash')
const Trailpack = require('trailpack')

module.exports = class BootStrap extends Trailpack {

  /**
   * Check there a config.bootstrap file that export a function
   */
  validate () {
    if (_.isUndefined(this.app.config.bootstrap)) {
      return Promise.reject(new Error('There is no config.bootstrap !'))
    }

    if (!_.isFunction(this.app.config.bootstrap)) {
      return Promise.reject(new Error('config.bootstrap is not a function !'))
    }

    return Promise.resolve()
  }

  /**
   * Listen trails:ready event and call bootstrap function
   */
  initialize () {
    this.app.on('trails:ready', () => {
      this.app.config.bootstrap(this.app)
    })
    return Promise.resolve()
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}
