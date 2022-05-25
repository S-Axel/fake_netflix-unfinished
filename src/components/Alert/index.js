import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

/**
 * @category Components
 * @subcategory Global
 *
 * @component
 */
function Alert({ className, severity, children, ...rest }) {
  const severityToIcon = {
    warning: faTriangleExclamation,
  };

  return (
    <div
      className={classNames('alert', `alert--${severity}`, className)}
      {...rest}
    >
      <FontAwesomeIcon icon={severityToIcon[severity]} className="alert__icon" />
      {children}
    </div>
  );
}

Alert.propTypes = {
  className: PropTypes.string,
  /**
   * HTML button type attribute, one of [ 'warning' ]
   */
  severity: PropTypes.oneOf(['warning']),
  /**
   * Content, text inside the alert
   */
  children: PropTypes.node,
};

Alert.defaultProps = {
  className: '',
  severity: 'warning',
  children: PropTypes.node,
};

export default memo(Alert);
