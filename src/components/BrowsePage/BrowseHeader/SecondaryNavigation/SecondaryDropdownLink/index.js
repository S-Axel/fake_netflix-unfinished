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
function SecondaryDropdownLink({ className, to, children, ...rest }) {
  return (
    <NavLink
      className={classNames('secondary-dropdown-link', className)}
      to={to}
      {...rest}
    >
      {children}
    </NavLink>
  );
}

SecondaryDropdownLink.propTypes = {
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

SecondaryDropdownLink.defaultProps = {
  className: '',
};

export default memo(SecondaryDropdownLink);
