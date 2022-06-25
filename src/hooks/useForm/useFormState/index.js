import { useState } from 'react';
import setField from './setField';
import setFieldValue from './setFieldValue';
import setError from './setError';
import clearError from './clearError';

const useFormState = () => {
  const [state, setState] = useState({ fields: {}, errors: {} });

  return {
    fields: state.fields,
    getField: (fieldName) => state.fields[fieldName],
    setField: setField(setState),
    getFieldValue: (fieldName) => state.fields[fieldName]?.value,
    setFieldValue: setFieldValue(setState),
    errors: state.errors,
    setError: setError(setState),
    clearError: clearError(setState),
  };
};

export default useFormState;
