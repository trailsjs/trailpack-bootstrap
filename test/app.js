'use strict'
const _ = require('lodash')
const smokesignals = require('smokesignals')

const App = {
  pkg: {
    name: 'bootstrap-trailpack-test',
    version: '1.0.0'
  },
  api: {},
  config: {
    main: {
      packs: [
        smokesignals.Trailpack,
        require('trailpack-core'),
        require('../') // trailpack-bootstrap
      ]
    },
    bootstrap: (app) => {
      app.bootstrapOk = true
    }
  }
}

_.defaultsDeep(App, smokesignals.FailsafeConfig)
module.exports = App
