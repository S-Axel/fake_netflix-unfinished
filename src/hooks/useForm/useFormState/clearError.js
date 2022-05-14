const clearError = (setState) => (fieldName) => {
  setState((prevState) => {
    const newState = { ...prevState };
    delete newState.errors[fieldName];
    return newState;
  });
};

export default clearError;
