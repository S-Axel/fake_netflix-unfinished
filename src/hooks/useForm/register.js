import validate from './validation';

const getRegister = (formState) => {
  const register = (fieldName, options) => {
    const onChange = (e) => {
      const newValue = e.target.value;

      formState.setFieldValue(fieldName, newValue);

      validate(formState, fieldName, newValue);
    };

    // At first run, add the new field to the fields state object
    if (!formState.getField(fieldName)) {
      formState.setField(fieldName, '', options);
    }

    return {
      name: fieldName,
      id: fieldName,
      value: formState.getFieldValue(fieldName),
      onChange,
    };
  };

  return register;
};

export default getRegister;
