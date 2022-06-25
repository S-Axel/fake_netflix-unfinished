import objectHasProperty from './index';

describe('objectHasProperty', () => {
  it('is a function', () => {
    expect(typeof objectHasProperty).toBe('function');
  });

  it('returns a boolean', () => {
    expect(typeof objectHasProperty(null, null)).toBe('boolean');
  });

  const cases = [
    {
      obj: undefined,
      prop: undefined,
      expected: false,
    },
    {
      obj: undefined,
      prop: 'property',
      expected: false,
    },
    {
      obj: null,
      prop: null,
      expected: false,
    },
    {
      obj: null,
      prop: 'property',
      expected: false,
    },
    {
      obj: () => {},
      prop: undefined,
      expected: false,
    },
    {
      obj: () => {},
      prop: 'name',
      expected: false,
    },
    {
      obj: { property: null },
      prop: 'property',
      expected: true,
    },
    {
      obj: { property: 'test' },
      prop: 'property',
      expected: true,
    },
  ];
  it.each(cases)('given ($obj, $prop) returns $expected', ({ obj, prop, expected }) => {
    expect(objectHasProperty(obj, prop)).toBe(expected);
  });
});
