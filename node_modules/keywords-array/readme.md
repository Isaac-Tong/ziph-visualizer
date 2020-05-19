# keywords array

Convert a string of words to an array.

## install

    $ npm install keywords-array

## example

```js
var toArray = require('../');

// by default splits on spaces or commas
var wordArray = toArray('this is, all, a string');
  // => ['this', 'is', 'all', 'a', 'string']

// split on something else:
var otherArray = toArray('this is, all, a string', /custom/);
```
