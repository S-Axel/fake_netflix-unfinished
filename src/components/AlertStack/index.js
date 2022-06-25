import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';
import Alert from '../Alert';

/**
 * @component
 */
function AlertStack({ className, alerts, closeAlert, ...rest }) {
  return (
    <div
      className={classNames('alert-stack', className)}
      {...rest}
    >
      {alerts.map((alert, index) => (
        <Alert
          key={alert.content}
          onClose={() => closeAlert(index)}
          severity={alert.severity}
        >
          {alert.content}
        </Alert>
      ))}
    </div>
  );
}

AlertStack.propTypes = {
  className: PropTypes.string,
  /**
   * Array of alerts
   */
  alerts: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    severity: PropTypes.oneOf(['warning', 'error']).isRequired,
  })).isRequired,
  /**
   * Callback function called when a user attempts to close an alert.
   * The index of the alert is given as first parameter : closeAlert(alertIndex)
   */
  closeAlert: PropTypes.func.isRequired,
};

AlertStack.defaultProps = {
  className: '',
};

export default memo(AlertStack);
