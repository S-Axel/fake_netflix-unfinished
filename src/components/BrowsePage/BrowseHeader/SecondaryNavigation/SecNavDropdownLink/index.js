import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';
import { NavLink } from 'react-router-dom';

/**
 * navigation link for SecondaryNavigation component.
 * Dropdown version.
 * Built on top of NavLink.
 *
 * @component
 */
function SecNavDropdownLink({ className, to, children, ...rest }) {
  return (
    <NavLink
      className={classNames('sec-nav-dropdown-link', className)}
      to={to}
      {...rest}
    >
      {children}
    </NavLink>
  );
}

SecNavDropdownLink.propTypes = {
  className: PropTypes.string,
  /**
   * Content of the link
   */
  children: PropTypes.node.isRequired,
  /**
   * Router path to redirect tu user on click
   */
  to: PropTypes.string.isRequired,
};

SecNavDropdownLink.defaultProps = {
  className: '',
};

export default memo(SecNavDropdownLink);
