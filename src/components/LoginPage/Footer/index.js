import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * Page footer
 *
 * @component
 */
function Footer({ className, ...rest }) {
  const rootClassNames = classNames('footer', className);

  return (
    <footer
      className={rootClassNames}
      {...rest}
    />
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default memo(Footer);
