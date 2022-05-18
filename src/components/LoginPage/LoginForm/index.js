import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';
import TextField from '../../TextField';
import Button from '../../Button';
import useForm from '../../../hooks/useForm';
import { validateEmailOrPhone, validatePassword } from '../../../validators';

/**
 * Login form
 *
 * @component
 */
function LoginForm({ className }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const rootClassNames = classNames('login-form', className);

  const onSubmit = () => {};

  return (
    <main className={rootClassNames}>
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
          type="password"
          {...register('password', { validate: validatePassword })}
          error={errors.password}
        />
        <Button
          className="login-form__button"
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </main>
  );
}

LoginForm.propTypes = {
  className: PropTypes.string,
};

LoginForm.defaultProps = {
  className: '',
};

export default LoginForm;
