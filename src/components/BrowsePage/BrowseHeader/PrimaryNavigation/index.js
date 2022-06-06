import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import CustomNavLink from '../../../CustomNavLink';
import Dropdown from '../../../Dropdown';

/**
 * Primary navigation of browse page header
 * @component
 */
function PrimaryNavigation({ className, ...rest }) {
  return (
    <nav
      className={classNames('primary-navigation', className)}
      {...rest}
    >
      <Dropdown
        className="primary-navigation__dropdown"
        buttonContent={(
          <>
            Browse
            &nbsp;
            <FontAwesomeIcon icon={faCaretDown} />
          </>
        )}
      >
        <ul style={{ width: '10rem' }}>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </Dropdown>
      <ul className="primary-navigation__flat">
        <li className="primary-navigation__flat-list-item">
          <CustomNavLink to="/browse">Home</CustomNavLink>
        </li>
        <li className="primary-navigation__flat-list-item">
          <CustomNavLink to="/">TV Shows</CustomNavLink>
        </li>
        <li className="primary-navigation__flat-list-item">
          <CustomNavLink to="/">Movies</CustomNavLink>
        </li>
        <li className="primary-navigation__flat-list-item">
          <CustomNavLink to="/">New & Popular</CustomNavLink>
        </li>
        <li className="primary-navigation__flat-list-item">
          <CustomNavLink to="/">My List</CustomNavLink>
        </li>
      </ul>
    </nav>
  );
}

PrimaryNavigation.propTypes = {
  className: PropTypes.string,
};

PrimaryNavigation.defaultProps = {
  className: '',
};

export default memo(PrimaryNavigation);
