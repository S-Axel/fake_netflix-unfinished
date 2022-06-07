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
function PrimNavFlatLink({ className, to, children, ...rest }) {
  const getClassNames = ({ isActive }) => classNames(
    'prim-nav-flat-link',
    {
      'prim-nav-flat-link--active': isActive,
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

PrimNavFlatLink.propTypes = {
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

PrimNavFlatLink.defaultProps = {
  className: '',
};

export default memo(PrimNavFlatLink);
