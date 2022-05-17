import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

function BackgroundAsImage({ className, src, ...rest }) {
  const rootClassNames = classNames('rc-background', className);

  return (
    <div
      className={rootClassNames}
      aria-hidden="true"
      {...rest}
    >
      <img className="rc-background__img" src={src} alt="background" />
    </div>
  );
}

BackgroundAsImage.propTypes = {
  className: PropTypes.string,
  /**
   * HTML attribute src for the img element
   */
  src: PropTypes.string.isRequired,
};

BackgroundAsImage.defaultProps = {
  className: '',
};

export default memo(BackgroundAsImage);
