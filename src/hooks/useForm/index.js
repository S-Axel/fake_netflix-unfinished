import { useState } from 'react';
import getRegister from './register';
import getHandleSubmit from './handleSubmit';

const useForm = () => {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  return {
    register: getRegister(fields, setFields, setErrors),
    handleSubmit: getHandleSubmit(fields, errors),
    formState: { errors },
  };
};

export default useForm;
