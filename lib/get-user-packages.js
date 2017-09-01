'use strict'

const npmUserPackages = require('npm-user-packages')

module.exports = user => {
  return npmUserPackages(user).then(packages => packages).catch(err => err)
}
