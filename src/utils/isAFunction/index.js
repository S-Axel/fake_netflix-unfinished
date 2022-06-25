/**
 * Test if argument is a function
 * @param {*} value
 * @returns {boolean}
 */
const isAFunction = (value) => (
  (typeof value) === 'function'
);

export default isAFunction;
