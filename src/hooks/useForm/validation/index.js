const validate = (formState, fieldName, newValue) => {
  const validationFn = formState.getField(fieldName)?.options?.validate;
  if (!validationFn) { return; }
  const result = validationFn(newValue);
  if (result === true) {
    formState.clearError(fieldName);
  } else if (typeof result === 'string') {
    formState.setError(fieldName, result);
  }
};

export default validate;
