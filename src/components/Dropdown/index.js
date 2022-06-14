import { memo, useRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';
import Button from '../Button';
import isOnClickEventFromKeyboard from '../../utils/isOnClickEventFromKeyboard';

/**
 * @component
 */
function Dropdown({ className, buttonContent, variant, toggled, children, ...rest }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const refDropContainer = useRef(null);
  const refDropContent = useRef(null);

  const toggledDropdown = () => {
    setDropdownOpen((isOpen) => {
      toggled(!isOpen);
      return !isOpen;
    });
  };
  const openDropdown = () => {
    setDropdownOpen(true);
    toggled(true);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
    toggled(false);
  };

  const onClickHandler = (e) => {
    if (isOnClickEventFromKeyboard(e)) {
      toggledDropdown();
    } else {
      openDropdown();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <div
      ref={refDropContainer}
      className={className}
      onMouseOver={openDropdown}
      onMouseLeave={closeDropdown}
      {...rest}
    >
      <Button
        className="dropdown__button"
        variant="text"
        color="secondary"
        onClick={onClickHandler}
      >
        {buttonContent}
      </Button>
      <div ref={refDropContent} className={classNames('dropdown__content', `dropdown__content--${variant}`, { 'dropdown__content--displayed': dropdownOpen })}>
        <FontAwesomeIcon
          className={classNames('dropdown__arrow', `dropdown__arrow--${variant}`, { 'dropdown__arrow--displayed': dropdownOpen })}
          icon={faCaretUp}
        />
        {children}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  className: PropTypes.string,
  /**
   * Content of the button triggering the dropdown
   */
  buttonContent: PropTypes.node.isRequired,
  /**
   * Variant of Dropdown, one of ['primary', 'secondary']
   */
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  /**
   * Called each time the dropdown is toggled, with a boolean argument whether it is open or not
   */
  toggled: PropTypes.func,
  /**
   * Content of the opened dropdown
   */
  children: PropTypes.node.isRequired,

};

Dropdown.defaultProps = {
  className: '',
  toggled: () => {},
};

export default memo(Dropdown);
