import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';
import LogoNetflix from '../../LogoNetflix';

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
