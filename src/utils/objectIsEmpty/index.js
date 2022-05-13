function objectIsEmpty(object) {
  if (typeof object !== 'object') {
    return false;
  }
  if (!object.keys) {
    return true;
  }
  return (object?.keys?.length === 0);
}

export default objectIsEmpty;
