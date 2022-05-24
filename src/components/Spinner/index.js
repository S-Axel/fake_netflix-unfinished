import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';

/**
 * @component
 */
function Spinner({ className, ...rest }) {
  return (
    <FontAwesomeIcon
      className={classNames('spinner', className)}
      icon={faCircleNotch}
      {...rest}
    />
  );
}

Spinner.propTypes = {
  className: PropTypes.string,
};

Spinner.defaultProps = {
  className: '',
};

export default memo(Spinner);
