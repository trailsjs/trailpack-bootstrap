'use strict'

const _ = require('lodash')
const Trailpack = require('trailpack')

module.exports = class BootStrap extends Trailpack {

  /**
   * TODO document method
   */
  validate () {
    if (!this.app.config.bootstrap) {
      return Promise.reject(new Error('There not config.bootstrap !'))
    }

    if (!_.isFunction(this.app.config.bootstrap)) {
      return Promise.reject(new Error('config.bootstrap is not a function !'))
    }

    return Promise.resolve()
  }

  /**
   * TODO document method
   */
  configure () {

    return Promise.resolve()
  }

  /**
   * TODO document method
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

