import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';
import { NavLink } from 'react-router-dom';

/**
 * navigation link for PrimaryNavigation component.
 * Flat version.
 * Built on top of NavLink.
 *
 * @component
 */
function PrimaryFlatLink({ className, to, children, ...rest }) {
  const getClassNames = ({ isActive }) => classNames(
    'primary-flat-link',
    {
      'primary-flat-link--active': isActive,
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

PrimaryFlatLink.propTypes = {
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

PrimaryFlatLink.defaultProps = {
  className: '',
};

export default memo(PrimaryFlatLink);
