import objectIsEmpty from '../../utils/objectIsEmpty';
import isAFunction from '../../utils/isAFunction';

const getHandleSubmit = (formState) => {
  const handleSubmit = (onSubmit, onError) => (e) => {
    e.preventDefault();
    if (isAFunction(onSubmit) && objectIsEmpty(formState.errors)) {
      onSubmit(formState.fields, e);
    } else if (isAFunction(onError)) {
      onError(formState.errors);
    }
  };

  return handleSubmit;
};

export default getHandleSubmit;
