import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import actionUserInit from '../../actions/user/actionUserInit';

/**
 * Init user authentification
 * @component
 */
function AuthInit() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionUserInit());
  }, [dispatch]);
  return null;
}

AuthInit.propTypes = {};

AuthInit.defaultProps = {};

export default AuthInit;
