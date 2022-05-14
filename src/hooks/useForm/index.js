import { useState } from 'react';
import getRegister from './register';
import getHandleSubmit from './handleSubmit';
import getFormState from './formState';

const useForm = () => {
  const [state, setState] = useState({ fields: {}, errors: {} });
  const formState = getFormState(state, setState);

  return {
    register: getRegister(formState),
    handleSubmit: getHandleSubmit(formState),
    formState: { errors: formState.errors },
  };
};

export default useForm;
