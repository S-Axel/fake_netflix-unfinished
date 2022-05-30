import objectIsEmpty from './index';

describe('objectIsEmpty', () => {
  it('is a function', () => {
    expect(typeof objectIsEmpty).toBe('function');
  });

  it('returns a boolean', () => {
    expect(typeof objectIsEmpty(null)).toBe('boolean');
  });

  const cases = [
    {
      obj: undefined,
      expected: false,
    },
    {
      obj: null,
      expected: false,
    },
    {
      obj: 'test',
      expected: false,
    },
    {
      obj: {},
      expected: true,
    },
    {
      obj: { prop: 'value' },
      expected: false,
    },
    {
      obj: { prop: undefined },
      expected: false,
    },
  ];
  it.each(cases)('given ($obj) returns $expected', ({ obj, expected }) => {
    expect(objectIsEmpty(obj)).toBe(expected);
  });
});
