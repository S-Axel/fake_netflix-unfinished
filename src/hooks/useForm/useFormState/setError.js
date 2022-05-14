const setError = (setState) => (fieldName, errorMessage) => {
  setState((prevState) => (
    {
      ...prevState,
      errors: {
        ...prevState.errors,
        [fieldName]: errorMessage,
      },
    }
  ));
};

export default setError;
