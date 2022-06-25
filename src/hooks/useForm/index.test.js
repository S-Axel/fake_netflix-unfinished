import useForm from './index';

const mockFormState = { errors: 'errors' };

jest.mock('./useFormState', () => (() => (mockFormState)));

describe('useForm', () => {
  it('is a function', () => {
    expect(typeof useForm).toBe('function');
  });
  describe('returns an object', () => {
    it('', () => {
      expect(useForm()).toBeInstanceOf(Object);
    });
    it('with the right properties', () => {
      const returnValue = useForm();
      expect(returnValue).toHaveProperty('register');
      expect(returnValue).toHaveProperty('handleSubmit');
      expect(returnValue).toHaveProperty('formState');
    });

    it('with properties of the right type', () => {
      const returnValue = useForm();
      expect(typeof returnValue.register).toBe('function');
      expect(typeof returnValue.handleSubmit).toBe('function');
      expect(returnValue.formState).toBeInstanceOf(Object);
    });

    it('with the right formState property', () => {
      const returnValue = useForm();
      expect(returnValue.formState).toMatchObject(mockFormState);
    });
  });
});
