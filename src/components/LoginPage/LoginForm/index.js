import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';
import TextField from '../../TextField';
import Button from '../../Button';
import useForm from '../../../hooks/useForm';
import { validateEmailOrPhone, validatePassword } from '../../../validators';
import AlertStack from '../../AlertStack';

/**
 * Login form
 *
 * @category Components
 * @subcategory Global
 *
 * @component
 */
function LoginForm({ className, submit, submitButtonSpinning, alerts, closeAlert }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const rootClassNames = classNames('login-form', className);

  const onSubmit = (formData) => {
    submit({
      email: formData.emailOrPhone.value,
      password: formData.password.value,
    });
  };

  return (
    <main className={rootClassNames}>
      <h1 className="login-form__title">Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AlertStack className="login-form__alert-stack" alerts={alerts} closeAlert={closeAlert} />
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
          loading={submitButtonSpinning}
        >
          Sign In
        </Button>
      </form>
    </main>
  );
}

LoginForm.propTypes = {
  className: PropTypes.string,
  /**
   * Called on form submit: submit({email: string, password: string})
   */
  submit: PropTypes.func.isRequired,
  /**
   * Add a spinner inside the submit button
   */
  submitButtonSpinning: PropTypes.bool,
  /**
   * Array of alerts
   */
  alerts: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Callback function called when a user attempts to close an alert.
   * The index of the alert is given as first parameter : closeAlert(alertIndex)
   */
  closeAlert: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  className: '',
  submitButtonSpinning: false,
};

export default LoginForm;
