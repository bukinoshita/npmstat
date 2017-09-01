'use strict'

const axios = require('axios')

module.exports = packageName => {
  return axios(`https://registry.npmjs.org/${packageName}`)
    .then(({ data }) => {
      const {
        name,
        description,
        maintainers,
        time,
        homepage,
        keywords,
        repository,
        author,
        bugs,
        license
      } = data

      const pkg = {
        name,
        description,
        maintainers,
        time,
        homepage,
        keywords,
        repository,
        author,
        bugs,
        license,
        version: data['dist-tags'].latest
      }

      return pkg
    })
    .catch(({ response: { statusText } }) => statusText)
}
