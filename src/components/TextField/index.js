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
  ...rest
}) {
  const rootClassNames = classNames(
    'text-field',
    {
      'text-field--has-content': !!value,
      'text-field--error': !!error,
    },
    className,
  );

  return (
    <div
      className={rootClassNames}
      {...rest}
    >
      <div className="text-field__input-container">
        <input
          className="text-field__input"
          id={id}
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
        <label className="text-field__label" htmlFor={id}>{label}</label>
      </div>
      {error && <p className="text-field__error">{error}</p>}
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
  error: PropTypes.string.isRequired,
};

TextField.defaultProps = {
  className: '',
};

export default memo(TextField);
