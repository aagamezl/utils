# Utils

![Node CI](https://github.com/devnetic/utils/workflows/Node%20CI/badge.svg)
![npm (scoped)](https://img.shields.io/npm/v/@devnetic/utils)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@devnetic/utils?color=red)
![npm](https://img.shields.io/npm/dt/@devnetic/utils)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
![GitHub issues](https://img.shields.io/github/issues-raw/devnetic/utils)
![GitHub](https://img.shields.io/github/license/devnetic/utils)

Common utils for every single day tasks.

## getType(value: any): string

This function returns the value type, but this function is not just a typeof wrapper, because actually can determinate a more detailed data type. The data type is always a string starting with capital letter.

```javascript
utils.getType({})  // 'Object'
utils.getType(new Date())  // 'Date'
utils.getType(String())  // 'String'
utils.getType('')  // 'String'
utils.getType('123')  // 'String'
utils.getType(123)  // 'Number'
utils.getType(123.4)  // 'Number'
utils.getType(true)  // 'Boolean'
utils.getType(false)  // 'Boolean'
utils.getType(BigInt(1))  // 'BigInt'
utils.getType([])  // 'Array'
utils.getType(new Int16Array(3))  // 'Int16Array'
```

## isEqual(value: any, other: any): boolean

This function evaluate equality between two values, the values could by any data type, including nested object.

```javascript
utils.isEqual(1, 1)  // true
utils.isEqual(1.23, 1.23)  // true
utils.isEqual('1', '1')  // true
utils.isEqual(true, true)  // true
utils.isEqual(undefined, undefined)  // true
utils.isEqual(null, null)  // true
utils.isEqual({}, {})  // true
utils.isEqual({ foo: 'bar' }, { foo: 'bar' })  // true
utils.isEqual([], [])  // true
utils.isEqual(['foo'], ['foo'])  // true
utils.isEqual(['foo', { foo: 'bar' }, 1, 'a'], ['foo', { foo: 'bar' }, 1, 'a'])  // true
utils.isEqual(['foo', { foo: 'bar' }, 1, 'a'], ['foo', { foo: 'baz' }, 1, 'a'])  // false
utils.isEqual(true, 1)  // false
utils.isEqual({ foo: 'bar' }, {})  // false
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
