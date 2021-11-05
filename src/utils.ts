/**
 * Returns the type of the given parameter
 *
 * @param {*} value
 * @returns {string}
 */
export const getType = (value: any = undefined): string => {
  const typeRegex = /\[.*\s(\w*)\]/g

  return (typeRegex.exec(Object.prototype.toString.call(value)) ?? ['', 'Undefined'])[1]
}

/**
 * Performs a deep comparison between two values to determine if they are
 * equal.
 *
 * @param {*} value First value to compare.
 * @param {*} other Second value to compare.
 */
export const isEqual = <TValue, TOther>(value: TValue, other: TOther): boolean => {
  if (Object.is(value, other)) {
    return true
  }

  // Test the types
  if (Object.prototype.toString.call(value) !== Object.prototype.toString.call(other)) {
    return false
  }

  // Test object keys length
  if (Object.keys(value).length !== Object.keys(other).length) {
    return false
  }

  for (const key of Object.keys(value)) {
    if (typeof Reflect.get(value as unknown as object, key) === 'object') {
      if (!isEqual(Reflect.get(value as unknown as object, key), Reflect.get(other as unknown as object, key))) {
        return false
      }
    } else if (Reflect.get(value as unknown as object, key) !== Reflect.get(other as unknown as object, key)) {
      return false
    }
  }

  return true
}
