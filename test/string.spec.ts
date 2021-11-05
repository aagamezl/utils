import test from 'ava'

import * as utils from './../src'

test('should convert the value to came case', t => {
  const expected = 'someValue'

  t.is(utils.camelCase('someValue'), expected)
  t.is(utils.camelCase('some value'), expected)
  t.is(utils.camelCase('some  value'), expected)
  t.is(utils.camelCase('some_value'), expected)
  t.is(utils.camelCase('some__value'), expected)
  t.is(utils.camelCase('SomeValue'), expected)
  t.is(utils.camelCase('SOME VALUE'), expected)
  t.is(utils.camelCase(''), '')
})

test('should convert the value to kebab case', t => {
  const expected = 'some-value'

  t.is(utils.kebabCase('someValue'), expected)
  t.is(utils.kebabCase('some value'), expected)
  t.is(utils.kebabCase('some  value'), expected)
  t.is(utils.kebabCase('some_value'), expected)
  t.is(utils.kebabCase('some__value'), expected)
  t.is(utils.kebabCase('SomeValue'), expected)
  t.is(utils.kebabCase('SOME VALUE'), expected)
  t.is(utils.kebabCase(''), '')
})

test('should convert the value to snake case', t => {
  const expected = 'some_value'

  t.is(utils.snakeCase('someValue'), expected)
  t.is(utils.snakeCase('some value'), expected)
  t.is(utils.snakeCase('some  value'), expected)
  t.is(utils.snakeCase('some_value'), expected)
  t.is(utils.snakeCase('some__value'), expected)
  t.is(utils.snakeCase('SomeValue'), expected)
  t.is(utils.snakeCase('SOME VALUE'), expected)
  t.is(utils.snakeCase(''), '')
})
