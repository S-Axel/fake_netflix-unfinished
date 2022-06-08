import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import backgroundImg from '../../assets/images/better_call_saul.webp';

import './styles.css';
import BrowseHeader from './BrowseHeader';

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
      <BrowseHeader />
      <img src={backgroundImg} alt="background" style={{ width: '100%' }} />
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
