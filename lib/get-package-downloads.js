'use strict'

const axios = require('axios')

module.exports = (name, { range = 'last-month', type } = {}) => {
  const api = 'https://api.npmjs.org/downloads'

  if (type === 'range') {
    return axios(`${api}/range/${range}/${name}`)
      .then(({ data }) => data)
      .catch(({ response: { data: { error } } }) => error)
  }

  return axios(`${api}/point/${range}/${name}`)
    .then(({ data }) => data)
    .catch(({ response: { data: { error } } }) => error)
}
