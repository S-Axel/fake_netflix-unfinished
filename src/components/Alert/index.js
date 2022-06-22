import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';

/**
 * @category Components
 * @subcategory Global
 *
 * @component
 */
function Alert({ className, severity, onClose, children, ...rest }) {
  const severityToIcon = {
    warning: faTriangleExclamation,
    error: faCircleXmark,
  };

  return (
    <div
      className={classNames('alert', `alert--${severity}`, className)}
      {...rest}
    >
      {
        onClose && (
          <button type="button" className="alert__button" name="close" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        )
      }
      <FontAwesomeIcon icon={severityToIcon[severity]} className="alert__icon" />
      {children}
    </div>
  );
}

Alert.propTypes = {
  className: PropTypes.string,
  /**
   * HTML button type attribute, one of [ 'warning' | 'error' ]
   */
  severity: PropTypes.oneOf(['warning', 'error']),
  /**
   * Called on close button click
   */
  onClose: PropTypes.func,
  /**
   * Content, text inside the alert
   */
  children: PropTypes.node,
};

Alert.defaultProps = {
  className: '',
  severity: 'warning',
  onClose: null,
  children: PropTypes.node,
};

export default memo(Alert);
