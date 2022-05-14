import register from './register';
import handleSubmit from './handleSubmit';
import useFormState from './useFormState';

const useForm = () => {
  const formState = useFormState();

  return {
    register: register(formState),
    handleSubmit: handleSubmit(formState),
    formState: { errors: formState.errors },
  };
};

export default useForm;
