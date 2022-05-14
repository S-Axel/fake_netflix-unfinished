const getFormState = (state, setState) => (
  {
    fields: state.fields,
    getField: (fieldName) => (
      state.fields[fieldName]
    ),
    setField: (fieldName, value, options) => {
      setState((prevState) => ({
        ...prevState,
        fields: {
          ...prevState.fields,
          [fieldName]: {
            ...prevState.fields[fieldName],
            value,
            options,
          },
        },
      }));
    },
    getFieldValue: (fieldName) => (
      state.fields[fieldName]?.value
    ),
    setFieldValue: (fieldName, value) => {
      setState((prevState) => ({
        ...prevState,
        fields: {
          ...prevState.fields,
          [fieldName]: {
            ...prevState.fields[fieldName],
            value,
          },
        },
      }));
    },
    errors: state.errors,
    setError: (fieldName, errorMessage) => {
      setState((prevState) => (
        {
          ...prevState,
          errors: {
            ...prevState.errors,
            [fieldName]: errorMessage,
          },
        }
      ));
    },
    clearError: (fieldName) => {
      setState((prevState) => {
        const newState = { ...prevState };
        delete newState.errors[fieldName];
        return newState;
      });
    },
  }
);

export default getFormState;
