import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import actionApiLogout from '../../actions/user/actionApiLogout';

/**
 * Logout the user
 * @component
 */
function AuthLogout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionApiLogout());
  }, [dispatch]);
  return null;
}

AuthLogout.propTypes = {};

AuthLogout.defaultProps = {};

export default AuthLogout;
