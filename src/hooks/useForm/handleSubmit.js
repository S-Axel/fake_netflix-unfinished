import isAFunction from '../../utils/isAFunction';
import { validateAll } from './validation';

const handleSubmit = (formState) => (onSubmit, onError) => (e) => {
  e.preventDefault();
  const allValid = validateAll(formState);
  if (isAFunction(onSubmit) && allValid) {
    onSubmit(formState.fields, e);
  } else if (isAFunction(onError)) {
    onError();
  }
};

export default handleSubmit;
