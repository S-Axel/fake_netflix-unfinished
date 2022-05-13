import objectIsEmpty from '../../utils/objectIsEmpty';
import isAFunction from '../../utils/isAFunction';

const getHandleSubmit = (fields, errors) => {
  const handleSubmit = (onSubmit, onError) => (e) => {
    e.preventDefault();
    if (isAFunction(onSubmit) && objectIsEmpty(errors)) {
      onSubmit(fields, e);
    } else if (isAFunction(onError)) {
      onError(errors);
    }
  };

  return handleSubmit;
};

export default getHandleSubmit;
