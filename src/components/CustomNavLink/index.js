import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';
import { NavLink } from 'react-router-dom';

/**
 * Takes regular NavLink props, renders it with custom style.
 * @component
 */
function CustomNavLink({ className, to, children, ...rest }) {
  const getClassNames = ({ isActive }) => classNames(
    'custom-nav-link',
    {
      'custom-nav-link--active': isActive,
    },
    className,
  );

  return (
    <NavLink
      className={getClassNames}
      to={to}
      {...rest}
    >
      {children}
    </NavLink>
  );
}

CustomNavLink.propTypes = {
  className: PropTypes.string,
  /**
   * content of the link
   */
  children: PropTypes.node.isRequired,
  /**
   * NavLink prop: path to redirect
   */
  to: PropTypes.string.isRequired,
};

CustomNavLink.defaultProps = {
  className: '',
};

export default memo(CustomNavLink);
