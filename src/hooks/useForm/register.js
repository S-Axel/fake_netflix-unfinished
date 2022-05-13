import objectHasProperty from '../../utils/objectHasProperty';
import validate from './validation';

const getRegister = (data, setData) => {
  const register = (fieldName, options) => {
    const onChange = (e) => {
      const newValue = e.target.value;

      setData((prevData) => ({
        ...prevData,
        fields: {
          ...prevData.fields,
          [fieldName]: {
            ...prevData.fields[fieldName],
            value: newValue,
          },
        },
      }));

      if (data.fields[fieldName]?.validate) {
        validate(newValue, data.fields[fieldName].validate, fieldName, setData);
      }
    };

    // At first run, add the new field to the fields state object
    if (!objectHasProperty(data.fields, fieldName)) {
      setData((prevData) => ({
        ...prevData,
        fields: {
          ...prevData.fields,
          [fieldName]: { value: '', ...options },
        },
      }));
    }

    return {
      name: fieldName,
      id: fieldName,
      value: data?.fields[fieldName]?.value,
      onChange,
    };
  };

  return register;
};

export default getRegister;
