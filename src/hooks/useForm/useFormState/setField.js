const setField = (setState) => (fieldName, value, options) => {
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
};

export default setField;
