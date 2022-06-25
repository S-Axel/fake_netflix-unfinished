/**
 * Test if argument is an empty object
 * returns false if it is null or not an object
 * @param {Object} object
 * @returns {boolean}
 */
function objectIsEmpty(object) {
  if (typeof object !== 'object' || object === null) {
    return false;
  }
  return (Object.keys(object).length === 0);
}

export default objectIsEmpty;
