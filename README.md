# plain-hamming [![build status](https://secure.travis-ci.org/thlorenz/plain-hamming.png)](http://travis-ci.org/thlorenz/plain-hamming)

Calculates the [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) between two strings.

Uses very simple algorithm that does no input checking to be faster, therefore make sure that the arguments you pass in
are both strings of equal length.

```js
const plainHamming = require('plain-hamming')
plainHamming('hello', 'hello')  // => 0
plainHamming('hello', 'he1lo')  // => 1
plainHamming('hello', 'he11o')  // => 2
plainHamming('hello', 'h3llo')  // => 1
plainHamming('hello', 'h3ll0')  // => 2
```

## Installation

    npm install plain-hamming

## License

MIT
