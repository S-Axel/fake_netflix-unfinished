function objectIsEmpty(object) {
  if (typeof object !== 'object') {
    return false;
  }
  return object.keys.length === 0;
}

export default objectIsEmpty;
