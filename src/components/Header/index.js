import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';
import LogoNetflix from '../LogoNetflix';

/**
 * Page header
 *
 * @component
 */
function Header({ className, ...rest }) {
  const rootClassNames = classNames('rc-header', className);

  return (
    <header
      className={rootClassNames}
      {...rest}
    >
      <LogoNetflix className="rc-header__logo" />
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default memo(Header);
