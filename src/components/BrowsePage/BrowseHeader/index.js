import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';
import LogoNetflix from '../../LogoNetflix';
import Dropdown from '../../Dropdown';

/**
 * Browse page header
 *
 * @category Components
 * @subcategory Global
 *
 * @component
 */
function BrowseHeader({ className, ...rest }) {
  return (
    <header
      className={classNames('browse-header', className)}
      {...rest}
    >
      <LogoNetflix className="browse-header__logo" />
      <Dropdown
        className="browse-header__browse-dropdown"
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
    </header>
  );
}

BrowseHeader.propTypes = {
  className: PropTypes.string,
};

BrowseHeader.defaultProps = {
  className: '',
};

export default memo(BrowseHeader);
