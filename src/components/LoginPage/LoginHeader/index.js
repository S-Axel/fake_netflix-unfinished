import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';
import LogoNetflix from '../../LogoNetflix';

/**
 * Login page header
 *
 * @category Components
 * @subcategory Global
 *
 * @component
 */
function LoginHeader({ className, ...rest }) {
  const rootClassNames = classNames('login-header', className);

  return (
    <header
      className={rootClassNames}
      {...rest}
    >
      <LogoNetflix className="login-header__logo" />
    </header>
  );
}

LoginHeader.propTypes = {
  className: PropTypes.string,
};

LoginHeader.defaultProps = {
  className: '',
};

export default memo(LoginHeader);
