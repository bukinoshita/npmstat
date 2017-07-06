'use strict'

const npmUserPackages = require('npm-user-packages')
const mapArr = require('map-arr')
const axios = require('axios')
const sortArr = require('sort-arr')

module.exports = user => {
  return npmUserPackages(user).then(packages => {
    const api = 'https://api.npmjs.org/downloads/point'
    let bQuery = ''
    let result = []

    mapArr(packages, pkg => (bQuery = `${bQuery}${pkg.name},`))

    return axios(`${api}/last-month/${bQuery}`)
      .then(({ data }) => {
        const keys = Object.keys(data)
        keys.map(key => {
          if (data[key]) {
            result = [...result, data[key]]
          }
        })

        return sortArr(result, 'downloads').reverse()
      })
      .catch(err => console.log(err))
  })
}
