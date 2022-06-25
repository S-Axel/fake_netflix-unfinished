import isAFunction from './index';

describe('isAFunction', () => {
  it('is a function', () => {
    expect(typeof isAFunction).toBe('function');
  });
  it('returns true given a function', () => {
    expect(isAFunction(() => {})).toBe(true);
  });
  const cases = ['string', null, undefined, 0, 1, {}, NaN];
  it.each(cases)('returns false given %p', (value) => {
    expect(isAFunction(value)).toBe(false);
  });
});
