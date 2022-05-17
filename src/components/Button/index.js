/* eslint-disable react/button-has-type */
import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * A simple button component
 *
 * @component
 */
function Button({ className, type, children, ...rest }) {
  const rootClassNames = classNames('rc-button', className);

  return (
    <button
      className={rootClassNames}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  /**
   * HTML button type attribute, one of [ 'button' | 'submit' | 'reset' ]
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * Content, text inside the button
   */
  children: PropTypes.node,
};

Button.defaultProps = {
  className: '',
  type: 'button',
  children: '',
};

export default memo(Button);
