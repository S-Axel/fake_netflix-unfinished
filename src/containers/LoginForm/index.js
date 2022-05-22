import * as Realm from 'realm-web';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginPage/LoginForm';

function LoginFormContainer({ className }) {
  const submitHandler = async (formData) => {
    const app = new Realm.App({ id: 'fake-netflix-vwzwz' });
    const credentials = Realm.Credentials.emailPassword(formData.email, formData.password);
    await app.logIn(credentials);
  };

  return (
    <LoginForm className={className} submit={submitHandler} />
  );
}

LoginFormContainer.propTypes = {
  className: PropTypes.string,
};

LoginFormContainer.defaultProps = {
  className: '',
};

export default LoginFormContainer;
