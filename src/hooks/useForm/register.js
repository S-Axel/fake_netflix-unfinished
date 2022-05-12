import objectHasProperty from '../../utils/objectHasProperty';
import validate from './validation';

const getRegister = (fields, setFields, setErrors) => {
  const register = (fieldName, options) => {
    const onChange = (e) => {
      const newValue = e.target.value;

      setFields((prevFields) => ({
        ...prevFields,
        [fieldName]: newValue,
      }));

      if (options?.validate) {
        validate(newValue, options.validate, fieldName, setErrors);
      }
    };

    // At first run, add the new field to the fields state object
    if (!objectHasProperty(fields, fieldName)) {
      setFields((prevFields) => ({
        ...prevFields,
        [fieldName]: '',
      }));
    }

    return {
      name: fieldName,
      id: fieldName,
      value: fields[fieldName],
      onChange,
    };
  };

  return register;
};

export default getRegister;
