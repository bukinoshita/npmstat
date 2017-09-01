# npmstat [![Build Status](https://travis-ci.org/bukinoshita/npmstat.svg?branch=master)](https://travis-ci.org/bukinoshita/npmstat)

> npm package stats


## Install

```
$ npm install --save npmstat
```


## Usage

```js
const npmstat = require('npmstat')

npmstat.getPackage('npmstat').then(res => res)
// => { name: 'npmstat', description: 'npm package stats', ... }

npmstat.getPackages('bukinoshita').then(res => res)
// => [{ name: 'react-cookies', version: '0.1.0', ... }, { name: 'is-github-repo', version: '0.2.0', ... }, ...]

npmstat.getDownloads('react-cookies').then(res => res)
// => { downloads: 19271, package: 'react-cookies', ... }
```


## API

### npmstat

### .getPackage(packageName)

Returns a `promise`<br/>
Get npm package information

#### packageName

Type: `string`<br/>
Required

Package name

```js
npmstat.getPackage('npmstat')
  .then(pkg => pkg)
  .catch(err => err)
// => { name: 'npmstat', description: 'npm packages stats', ... }
```

### .getPackages(username)

Returns a `promise`<br/>
Get user npm pkgs information

#### username

Type: `string`<br/>
Required

npm username

```js
npmstat.getPackages('bukinoshita')
  .then(pkg => pkg)
  .catch(err => err)
// => [{ name: 'react-cookies', version: '0.1.0', ... }, { name: 'is-github-repo', version: '0.2.0', ... }, ...]
```

### .getDownloads(packageName, [options])

Returns a `promise`<br/>
Get npm package downloads count

#### packageName

Type: `string`<br/>
Required

Package name

```js
npmstat.getDownloads('react-cookies')
  .then(pkg => pkg)
  .catch(err => err)
// => { downloads: 19271, package: 'react-cookies', ... }
```

### options

Type: `object`<br/>

#### range

Type: `string`<br/>
Default: `last-month`<br/>
Options: `last-day`, `last-week`, `last-month`, `YYYY-MM-DD` (specific date) or `YYYY-MM-DD:YYYY-MM-DD` (specific month)

- **last-day**: Gets downloads for the last available day. In practice, this will usually be "yesterday" (in GMT) but if stats for that day have not yet landed, it will be the day before.
- **last-week**: Gets downloads for the last 7 available days.
- **last-month**: Gets downloads for the last 30 available days.

```js
npmstat.getDownloads('react-cookies', { range: 'last-week' })
  .then(pkg => pkg)
  .catch(err => err)
// => { downloads: 19271, package: 'react-cookies', ... }
```

#### type

Type: `string`<br/>
Default: `point`<br/>
Options: `point` or `range`

```js
npmstat.getDownloads('react-cookies', { type: 'range' })
  .then(pkg => pkg)
  .catch(err => err)
// => { package: 'react-cookies', downloads: [{ downloads: 100, day: '2017-06-8'}, ...], ... }
```


## Related

- [npmstat-cli](https://github.com/bukinoshita/npmstat-cli) — CLI for this module


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
