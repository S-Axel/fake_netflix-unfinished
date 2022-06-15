import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import PrimaryFlatLink from './PrimaryFlatLink';
import PrimaryDropdownLink from './PrimaryDropdownLink';
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
        variant="primary"
        buttonContent={(
          <>
            Browse
            &nbsp;
            <FontAwesomeIcon icon={faCaretDown} />
          </>
        )}
      >
        <ul className="primary-navigation__dropdown" style={{ width: '27em' }}>
          <li className="primary-navigation__dropdown-list-item">
            <PrimaryDropdownLink className="primary-navigation__dropdown-list-item-link" to="/browse">Home</PrimaryDropdownLink>
          </li>
          <li className="primary-navigation__dropdown-list-item">
            <PrimaryDropdownLink className="primary-navigation__dropdown-list-item-link" to="/">TV Shows</PrimaryDropdownLink>
          </li>
          <li className="primary-navigation__dropdown-list-item">
            <PrimaryDropdownLink className="primary-navigation__dropdown-list-item-link" to="/">Movies</PrimaryDropdownLink>
          </li>
          <li className="primary-navigation__dropdown-list-item">
            <PrimaryDropdownLink className="primary-navigation__dropdown-list-item-link" to="/">New & Popular</PrimaryDropdownLink>
          </li>
          <li className="primary-navigation__dropdown-list-item">
            <PrimaryDropdownLink className="primary-navigation__dropdown-list-item-link" to="/">My List</PrimaryDropdownLink>
          </li>
        </ul>
      </Dropdown>
      <ul className="primary-navigation__flat">
        <li className="primary-navigation__flat-list-item">
          <PrimaryFlatLink to="/browse">Home</PrimaryFlatLink>
        </li>
        <li className="primary-navigation__flat-list-item">
          <PrimaryFlatLink to="/">TV Shows</PrimaryFlatLink>
        </li>
        <li className="primary-navigation__flat-list-item">
          <PrimaryFlatLink to="/">Movies</PrimaryFlatLink>
        </li>
        <li className="primary-navigation__flat-list-item">
          <PrimaryFlatLink to="/">New & Popular</PrimaryFlatLink>
        </li>
        <li className="primary-navigation__flat-list-item">
          <PrimaryFlatLink to="/">My List</PrimaryFlatLink>
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
