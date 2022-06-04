import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * @component
 */
function Arrow({ className, ...rest }) {
  return (
    <div
      className={classNames('arrow', className)}
      {...rest}
    />
  );
}

Arrow.propTypes = {
  className: PropTypes.string,
};

Arrow.defaultProps = {
  className: '',
};

export default memo(Arrow);
