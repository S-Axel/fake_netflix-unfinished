const setFieldValue = (setState) => (fieldName, value) => {
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
};

export default setFieldValue;
