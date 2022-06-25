import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';
import LogoNetflix from '../../LogoNetflix';
import PrimaryNavigation from './PrimaryNavigation';
import SecondaryNavigation from './SecondaryNavigation';

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
      <PrimaryNavigation className="browse-header__primary-navigation" />
      <SecondaryNavigation className="browse-header__secondary-navigation" />
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
