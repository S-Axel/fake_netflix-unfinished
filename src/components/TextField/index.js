import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

/**
 * @category Components
 * @subcategory Global
 *
 * @component
 */
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
          type={type}
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
  /**
   * Label displayed inside the input
   */
  label: PropTypes.string.isRequired,
  /**
   * 'name' input attribute
   */
  name: PropTypes.string.isRequired,
  /**
   * 'id' attribute to link the input and the label
   */
  id: PropTypes.string.isRequired,
  /**
   * Value displayed inside the input
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  /**
   * Callback for onChange event
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Will display the error below the input
   */
  error: PropTypes.string,
  /**
   * 'type' input attribute
   */
  type: PropTypes.string,
};

TextField.defaultProps = {
  className: '',
  error: '',
  type: 'text',
};

export default memo(TextField);
