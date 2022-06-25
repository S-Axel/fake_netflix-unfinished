import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import LoginForm from '../../components/LoginPage/LoginForm';
import actionApiLogin from '../../actions/user/actionApiLogin';
import { selectLoading } from '../../selectors/userSelectors';
import arrayRemoveIndex from '../../utils/arrayRemoveIndex';

function LoginFormContainer({ className }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const [alerts, setAlerts] = useState([
    {
      severity: 'warning',
      content: 'This is NOT the Netflix website, do NOT enter your Netflix credentials.',
    },
  ]);

  const removeAlert = (index) => {
    setAlerts((prev) => arrayRemoveIndex(prev, index));
  };

  const submitHandler = async (formData) => {
    dispatch(actionApiLogin(formData));
  };

  return (
    <LoginForm
      className={className}
      submit={submitHandler}
      submitButtonSpinning={isLoading}
      alerts={alerts}
      closeAlert={removeAlert}
    />
  );
}

LoginFormContainer.propTypes = {
  className: PropTypes.string,
};

LoginFormContainer.defaultProps = {
  className: '',
};

export default LoginFormContainer;
