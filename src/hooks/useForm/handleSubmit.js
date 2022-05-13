import objectIsEmpty from '../../utils/objectIsEmpty';
import isAFunction from '../../utils/isAFunction';

const getHandleSubmit = (data) => {
  const handleSubmit = (onSubmit, onError) => (e) => {
    e.preventDefault();
    if (isAFunction(onSubmit) && objectIsEmpty(data.errors)) {
      onSubmit(data.fields, e);
    } else if (isAFunction(onError)) {
      onError(data.errors);
    }
  };

  return handleSubmit;
};

export default getHandleSubmit;
