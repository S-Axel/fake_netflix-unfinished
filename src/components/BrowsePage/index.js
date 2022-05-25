import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * @category Components
 * @subcategory Pages
 *
 * @component
 */
function BrowsePage({ className, ...rest }) {
  return (
    <div
      className={classNames(className)}
      {...rest}
    >
      BrowsePage
    </div>
  );
}

BrowsePage.propTypes = {
  className: PropTypes.string,
};

BrowsePage.defaultProps = {
  className: '',
};

export default memo(BrowsePage);
