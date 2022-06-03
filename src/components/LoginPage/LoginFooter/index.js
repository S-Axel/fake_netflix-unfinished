import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * Login page footer
 *
 * @category Components
 * @subcategory Global
 *
 * @component
 */
function LoginFooter({ className, ...rest }) {
  const rootClassNames = classNames('footer', className);

  return (
    <footer
      className={rootClassNames}
      {...rest}
    />
  );
}

LoginFooter.propTypes = {
  className: PropTypes.string,
};

LoginFooter.defaultProps = {
  className: '',
};

export default memo(LoginFooter);
