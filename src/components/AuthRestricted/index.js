import { memo } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import './styles.css';
import { useSelector } from 'react-redux';
import { selectConnected } from '../../selectors/userSelectors';

/**
 * Display element property if authentification status is right. Redirect otherwise.
 *
 * @component
 */
function AuthRestricted({ type, element }) {
  const isConnected = useSelector(selectConnected);
  if (type === 'guest' && isConnected) return <Navigate to="/browse" />;
  if (type === 'connected' && !isConnected) return <Navigate to="/login" />;

  return element;
}

AuthRestricted.propTypes = {
  /**
   * One of [guest | connected].
   * 'guest' is for non authenticated users.
   * 'connected' is for authenticated users.
   */
  type: PropTypes.oneOf(['guest', 'connected']).isRequired,
  /**
   * Element whose access is restricted
   */
  element: PropTypes.node.isRequired,
};

export default memo(AuthRestricted);
