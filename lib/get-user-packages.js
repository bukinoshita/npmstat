'use strict'

const axios = require('axios')

module.exports = user => {
  const api = 'https://api.npms.io/v2/search?q=maintainer'
  const size = 250
  const offset = 0

  return axios(`${api}:${user}&size=${size}&from=${offset}`)
    .then(({ data }) => data)
    .catch(err => err)
}
