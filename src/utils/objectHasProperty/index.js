function objectHasProperty(object, property) {
  if (typeof object !== 'object') {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(object, property);
}

export default objectHasProperty;
