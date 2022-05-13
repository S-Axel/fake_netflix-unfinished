const addError = (fieldName, setData, error) => {
  setData((prevData) => (
    {
      ...prevData,
      errors: {
        ...prevData.errors,
        [fieldName]: error,
      },
    }
  ));
};

const clearError = (fieldName, setData) => {
  setData((prevData) => {
    const newData = { ...prevData };
    delete newData.errors[fieldName];
    return newData;
  });
};

const validate = (value, validationFn, fieldName, setData) => {
  const result = validationFn(value);
  if (result === true) {
    clearError(fieldName, setData);
  } else if (typeof result === 'string') {
    addError(fieldName, setData, result);
  }
};

export default validate;
