import './styles.css';
import TextField from '../../../components/TextField';
import useForm from '../../../hooks/useForm';
import { validateEmailOrPhone, validatePassword } from '../../../validators';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => {};

  return (
    <div className="login-form">
      <h1 className="login-form__title">Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className="login-form__text-field"
          label="Email or phone number"
          {...register('emailOrPhone', { validate: validateEmailOrPhone })}
          error={errors.emailOrPhone}
        />
        <TextField
          className="login-form__text-field"
          label="Password"
          {...register('password', { validate: validatePassword })}
          error={errors.password}
        />
      </form>
    </div>
  );
}

export default LoginForm;
