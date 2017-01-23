const test = require('tape')
const ph = require('../')

test('\nhamming results', function(t) {
  t.equal(ph('hello', 'hello'), 0)
  t.equal(ph('hello', 'he1lo'), 1)
  t.equal(ph('hello', 'he11o'), 2)
  t.equal(ph('hello', 'h3llo'), 1)
  t.equal(ph('hello', 'h3ll0'), 2)
  // ignores the fact that they are both of unequal length
  t.equal(ph('hello', 'he llo'), 2)
  t.equal(ph('he llo', 'hello'), 3)
  t.end()
})
