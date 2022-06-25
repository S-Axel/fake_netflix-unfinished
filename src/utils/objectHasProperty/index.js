/**
 *Test if given object has the given property
 * @param {Object} object
 * @param {string} property
 * @returns {boolean}
 */
function objectHasProperty(object, property) {
  if (!object || !property
    || typeof object !== 'object' || typeof property !== 'string') {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(object, property);
}

export default objectHasProperty;
