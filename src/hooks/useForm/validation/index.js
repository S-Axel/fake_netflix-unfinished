const validate = (formState, fieldName, newValue) => {
  const validationFn = formState.getField(fieldName)?.options?.validate;
  const result = validationFn ? validationFn(newValue) : true;
  if (result === true) {
    formState.clearError(fieldName);
  } else if (typeof result === 'string') {
    formState.setError(fieldName, result);
    return result;
  }
  return true;
};

const validateAll = (formState) => {
  const allValid = Object.keys(formState.fields).reduce((prevAreValid, fieldName) => (
    !!(validate(formState, fieldName, formState.getFieldValue(fieldName)) === true && prevAreValid)
  ), true);
  return allValid;
};

export { validate, validateAll };
