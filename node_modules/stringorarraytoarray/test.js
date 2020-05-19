const test = require('ava').test
const fn = require('./')

test('stringOrArrayToArray will take string', t => {
  const res = fn('hello')
  // Object.is(arr, arr) doesn't work. JavaScript ¯\_(ツ)_/¯
  t.is(['hello'][0], res[0], 'Return an array')
})

test('stringOrArrayToArray will take an array', t => {
  const res = fn(['hello'])
  // Object.is(arr, arr) doesn't work. JavaScript ¯\_(ツ)_/¯
  t.is(['hello'][0], res[0], 'Return an array')
})

test('stringOrArrayToArray will throw for an Object', t => {
  const error = t.throws(() => {
    fn({'hello': 'hello'})
  }, TypeError)

  t.is(error.message, 'Expected a string or an array')
})
