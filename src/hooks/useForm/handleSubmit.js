import objectIsEmpty from '../../utils/objectIsEmpty';

const getHandleSubmit = (fields, errors) => {
  const handleSubmit = (onSubmit, onError) => (e) => {
    if (objectIsEmpty(errors)) {
      onSubmit(fields, e);
    } else {
      onError(errors);
    }
  };

  return handleSubmit;
};

export default getHandleSubmit;
