import { useState } from 'react';
import getRegister from './register';
import getHandleSubmit from './handleSubmit';

const useForm = () => {
  const [data, setData] = useState({ fields: {}, errors: {} });

  return {
    register: getRegister(data, setData),
    handleSubmit: getHandleSubmit(data),
    formState: { errors: data.errors },
  };
};

export default useForm;
