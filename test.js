'use strict'

import test from 'ava'
import m from './'

test('get user packages', async t => {
  const pkgs = await m.getPackages('bukinoshita')

  t.true(pkgs.length > 80)
})

test('dont get user packages', async t => {
  const error = await m.getPackages(1)

  t.is(error.message, 'Expected a `string`, got `number`')
})

test('get package', async t => {
  const pkg = await m.getPackage('react-cookies')

  t.is(pkg.name, 'react-cookies')
})

test('dont get package', async t => {
  const error = await m.getPackage('1-1-1-1')

  t.is(error, 'Not Found')
})

test('get package downloads', async t => {
  const pkg = await m.getDownloads('react-cookies')

  t.is(pkg.package, 'react-cookies')
})

test('get package downloads w/ range', async t => {
  const pkg = await m.getDownloads('react-cookies', {
    range: 'last-day'
  })

  t.is(pkg.package, 'react-cookies')
})

test('get package downloads w/ type range', async t => {
  const pkg = await m.getDownloads('react-cookies', {
    type: 'range'
  })

  t.true(pkg.downloads.length > 10)
})

test('dont get package downloads', async t => {
  const error = await m.getDownloads('1-1-1-1')

  t.is(error, 'package 1-1-1-1 not found')
})
