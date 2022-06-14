import { memo, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';
import SecNavDropdownLink from './SecNavDropdownLink';
import Dropdown from '../../../Dropdown';
import DropdownTriggerButton from './DropdownTriggerButton';

/**
 * Secondary navigation of browse page header
 * @component
 */
function SecondaryNavigation({ className, ...rest }) {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const dropdownToggled = (newValue) => {
    setDropdownOpened(newValue);
  };

  return (
    <nav
      className={classNames('secondary-navigation', className)}
      {...rest}
    >
      <Dropdown
        className="secondary-navigation__dropdown"
        align="bottom-right"
        variant="secondary"
        buttonContent={<DropdownTriggerButton dropdownOpened={dropdownOpened} />}
        toggled={dropdownToggled}
      >
        <ul className="secondary-navigation__dropdown" style={{ width: '11rem' }}>
          <li className="secondary-navigation__dropdown-list-item">
            <SecNavDropdownLink className="secondary-navigation__dropdown-list-item-link" to="/signOut">Sign out of netflix</SecNavDropdownLink>
          </li>
        </ul>
      </Dropdown>
    </nav>
  );
}

SecondaryNavigation.propTypes = {
  className: PropTypes.string,
};

SecondaryNavigation.defaultProps = {
  className: '',
};

export default memo(SecondaryNavigation);
