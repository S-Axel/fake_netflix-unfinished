import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import LoginForm from '../../components/LoginPage/LoginForm';
import { apiLogin } from '../../slices/userSlice';

function LoginFormContainer({ className }) {
  const dispatch = useDispatch();

  const submitHandler = async (formData) => {
    dispatch(apiLogin(formData));
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
