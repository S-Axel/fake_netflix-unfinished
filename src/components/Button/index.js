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
function Button({ className, type, loading, children, ...rest }) {
  return (
    <button
      className={classNames('button', { 'button--loading': loading }, className)}
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
  loading: 'false',
  children: '',
};

export default memo(Button);
