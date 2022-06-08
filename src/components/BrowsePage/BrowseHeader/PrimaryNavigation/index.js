import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import PrimNavFlatLink from './PrimNavFlatLink';
import PrimNavDropdownLink from './PrimNavDropdownLink';
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
            <PrimNavDropdownLink className="primary-navigation__dropdown-list-item-link" to="/browse">Home</PrimNavDropdownLink>
          </li>
          <li className="primary-navigation__dropdown-list-item">
            <PrimNavDropdownLink className="primary-navigation__dropdown-list-item-link" to="/">TV Shows</PrimNavDropdownLink>
          </li>
          <li className="primary-navigation__dropdown-list-item">
            <PrimNavDropdownLink className="primary-navigation__dropdown-list-item-link" to="/">Movies</PrimNavDropdownLink>
          </li>
          <li className="primary-navigation__dropdown-list-item">
            <PrimNavDropdownLink className="primary-navigation__dropdown-list-item-link" to="/">New & Popular</PrimNavDropdownLink>
          </li>
          <li className="primary-navigation__dropdown-list-item">
            <PrimNavDropdownLink className="primary-navigation__dropdown-list-item-link" to="/">My List</PrimNavDropdownLink>
          </li>
        </ul>
      </Dropdown>
      <ul className="primary-navigation__flat">
        <li className="primary-navigation__flat-list-item">
          <PrimNavFlatLink to="/browse">Home</PrimNavFlatLink>
        </li>
        <li className="primary-navigation__flat-list-item">
          <PrimNavFlatLink to="/">TV Shows</PrimNavFlatLink>
        </li>
        <li className="primary-navigation__flat-list-item">
          <PrimNavFlatLink to="/">Movies</PrimNavFlatLink>
        </li>
        <li className="primary-navigation__flat-list-item">
          <PrimNavFlatLink to="/">New & Popular</PrimNavFlatLink>
        </li>
        <li className="primary-navigation__flat-list-item">
          <PrimNavFlatLink to="/">My List</PrimNavFlatLink>
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
