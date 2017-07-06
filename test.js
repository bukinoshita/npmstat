'use strict'

import test from 'ava'
import m from './'

test(async t => {
  const downloads = await m('bukinoshita')
  t.true(downloads.length > 60)
})
