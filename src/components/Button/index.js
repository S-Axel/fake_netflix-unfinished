/* eslint-disable react/button-has-type */
import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';
import Spinner from '../Spinner';

/**
 * A simple button component
 *
 * @category Components
 * @subcategory Global
 *
 * @component
 */
function Button({ className, type, variant, color, loading, children, ...rest }) {
  const classnames = classNames(
    'button',
    `button--${variant}`,
    `button--${color}`,
    { 'button--loading': loading },
    className,
  );

  return (
    <button
      className={classnames}
      type={type}
      {...rest}
    >
      {loading ? <Spinner /> : children}
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
   * The variant to use, one of [ 'contained' | 'text' ]
   */
  variant: PropTypes.oneOf(['contained', 'text']),
  /**
   * The color to use, one of [ 'primary' | 'secondary' ]
   */
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * If true, the button looks like it is loading
   */
  loading: PropTypes.bool,
  /**
   * Content, text inside the button
   */
  children: PropTypes.node,
};

Button.defaultProps = {
  className: '',
  type: 'button',
  variant: 'contained',
  color: 'primary',
  loading: false,
  children: '',
};

export default memo(Button);
