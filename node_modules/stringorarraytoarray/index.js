'use strict'
const isArray = require('isarray')

module.exports = function stringOrArrayToArray (input) {
  if (typeof input !== 'string') {
    if (!isArray(input)) {
      throw new TypeError('Expected a string or an array')
    }
    return input
  } else {
    return [input]
  }
}
