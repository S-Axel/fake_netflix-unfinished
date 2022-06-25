import arrayRemoveIndex from './index';

describe('arrayRemoveIndex', () => {
  it('is a function', () => {
    expect(typeof arrayRemoveIndex).toBe('function');
  });
  it('returns a new array, given correct arguments', () => {
    const array = [0, 1, 2];
    expect(arrayRemoveIndex(array, 1)).not.toBe(array);
  });
  it('returns a new array, given null arguments', () => {
    expect(arrayRemoveIndex(null, null)).toBeInstanceOf(Array);
  });
  it('removes the correct array element, given correct arguments', () => {
    const array = [0, 1, 2];
    expect(arrayRemoveIndex(array, 1)).toContain(array[0]);
    expect(arrayRemoveIndex(array, 1)).not.toContain(array[1]);
    expect(arrayRemoveIndex(array, 1)).toContain(array[2]);
  });
});
