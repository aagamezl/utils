/**
 * Returns the type of the given parameter
 *
 * @param {*} value
 * @returns {string}
 */
export declare const getType: (value?: any) => string;
/**
 * Performs a deep comparison between two values to determine if they are
 * equal.
 *
 * @param {*} value First value to compare.
 * @param {*} other Second value to compare.
 */
export declare const isEqual: <TValue, TOther>(value: TValue, other: TOther) => boolean;
