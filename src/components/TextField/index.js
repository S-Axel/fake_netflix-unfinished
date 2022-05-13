import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

function TextField({
  className,
  label,
  name,
  id,
  value,
  onChange,
  error,
  type,
  ...rest
}) {
  const rootClassNames = classNames(
    'rc-text-field',
    {
      'rc-text-field--has-content': !!value,
      'rc-text-field--error': !!error,
    },
    className,
  );

  return (
    <div
      className={rootClassNames}
      {...rest}
    >
      <div className="rc-text-field__input-container">
        <input
          className="rc-text-field__input"
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <label className="rc-text-field__label" htmlFor={id}>{label}</label>
      </div>
      {error && <p className="rc-text-field__error">{error}</p>}
    </div>
  );
}

TextField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
};

TextField.defaultProps = {
  className: '',
  error: '',
  type: 'text',
};

export default memo(TextField);
