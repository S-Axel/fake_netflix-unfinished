/**
 * Remove the element at the given index from the array and returns a new array.
 * Returns an empty array if the given array is falsy.
 *
 * @param {Array} array
 * @param {number} removeIndex
 * @returns {Array}
 */
const arrayRemoveIndex = (array, removeIndex) => {
  if (!array) return [];
  return array.filter((element, index) => (removeIndex !== index));
};

export default arrayRemoveIndex;
