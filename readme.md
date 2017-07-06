# npmstat [![Build Status](https://travis-ci.org/bukinoshita/npmstat.svg?branch=master)](https://travis-ci.org/bukinoshita/npmstat)

> npm packages downloads stats


## Install

```
$ npm install --save npmstat
```


## Usage

```js
const npmStat = require('npmstat')

npmStat('bukinoshita')
// => [{ package: packageName, downloads: 19 }, ...]
```


## API

### npmStat(input)

Returns a `promise`

#### input

Type: `string`<br/>
Required

npm username


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
