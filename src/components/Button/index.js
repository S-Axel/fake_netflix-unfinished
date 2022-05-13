/* eslint-disable react/button-has-type */
import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

function Button({ className, type, children, ...rest }) {
  // TODO replace comp with rc
  const rootClassNames = classNames('comp-button', className);

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
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: '',
  type: 'button',
};

export default memo(Button);
