const addError = (fieldName, setErrors, error) => {
  setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
};

const clearError = (fieldName, setErrors) => {
  setErrors((prevErrors) => {
    const newErrors = { ...prevErrors };
    delete newErrors[fieldName];
    return newErrors;
  });
};

const validate = (value, validationFn, fieldName, setErrors) => {
  const result = validationFn(value);
  if (result === true) {
    clearError(fieldName, setErrors);
  } else if (typeof result === 'string') {
    addError(fieldName, setErrors, result);
  }
};

export default validate;
