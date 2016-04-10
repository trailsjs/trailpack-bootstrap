'use strict'
const assert = require('assert')

describe('Bootstrap', () => {
  it('should call bootstrap function', () => {
    assert(global.app.bootstrapOk)
  })
})

