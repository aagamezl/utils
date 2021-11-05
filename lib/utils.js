"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqual = exports.getType = void 0;
/**
 * Returns the type of the given parameter
 *
 * @param {*} value
 * @returns {string}
 */
const getType = (value = undefined) => {
    const typeRegex = /\[.*\s(\w*)\]/g;
    return (typeRegex.exec(Object.prototype.toString.call(value)) ?? ['', 'Undefined'])[1];
};
exports.getType = getType;
/**
 * Performs a deep comparison between two values to determine if they are
 * equal.
 *
 * @param {*} value First value to compare.
 * @param {*} other Second value to compare.
 */
const isEqual = (value, other) => {
    if (Object.is(value, other)) {
        return true;
    }
    // Test the types
    if (Object.prototype.toString.call(value) !== Object.prototype.toString.call(other)) {
        return false;
    }
    // Test object keys length
    if (Object.keys(value).length !== Object.keys(other).length) {
        return false;
    }
    for (const key of Object.keys(value)) {
        if (typeof Reflect.get(value, key) === 'object') {
            if (!(0, exports.isEqual)(Reflect.get(value, key), Reflect.get(other, key))) {
                return false;
            }
        }
        else if (Reflect.get(value, key) !== Reflect.get(other, key)) {
            return false;
        }
    }
    return true;
};
exports.isEqual = isEqual;
//# sourceMappingURL=utils.js.map