import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '../../components/LoginPage/LoginForm';
import { thunkApiLogin } from '../../middlewares/thunkMiddleware';

function LoginFormContainer({ className }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.loading);

  const submitHandler = async (formData) => {
    dispatch(thunkApiLogin(formData));
  };

  return (
    <LoginForm className={className} submit={submitHandler} submitButtonSpinning={isLoading} />
  );
}

LoginFormContainer.propTypes = {
  className: PropTypes.string,
};

LoginFormContainer.defaultProps = {
  className: '',
};

export default LoginFormContainer;
