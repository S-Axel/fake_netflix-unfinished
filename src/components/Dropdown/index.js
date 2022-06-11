import { memo, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';
import Button from '../Button';
import { BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT } from '../../constants/alignPositions';
import setRefPosition from '../../utils/setRefPosition';
import isOnClickEventFromKeyboard from '../../utils/isOnClickEventFromKeyboard';

const arrowAlignStyle = {
  [BOTTOM_LEFT]: {
    left: 0,
  },
  [BOTTOM_CENTER]: {
    marginLeft: '-0.5em',
    left: '50%',
  },
  [BOTTOM_RIGHT]: {
    right: 0,
  },
};

/**
 * @component
 */
function Dropdown({ className, buttonContent, align, variant, children, ...rest }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const refDropContainer = useRef(null);
  const refDropContent = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((isOpen) => !isOpen);
  };
  const openDropdown = () => {
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const onClickHandler = (e) => {
    if (isOnClickEventFromKeyboard(e)) {
      toggleDropdown();
    } else {
      openDropdown();
    }
  };

  useEffect(() => {
    setRefPosition(align, refDropContent, refDropContainer);
  });

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <div
      ref={refDropContainer}
      className={classNames('dropdown__container', className)}
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
      <FontAwesomeIcon
        className={classNames('dropdown__arrow', `dropdown__arrow--${variant}`, { 'dropdown__arrow--displayed': dropdownOpen })}
        style={arrowAlignStyle[align]}
        icon={faCaretUp}
      />
      <div ref={refDropContent} className={classNames('dropdown__content', `dropdown__content--${variant}`, { 'dropdown__content--displayed': dropdownOpen })}>
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
   * Position of the dropdown according the trigger button
   */
  align: PropTypes.oneOf([BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT]),
  /**
   * Variant of Dropdown, one of ['primary', 'secondary']
   */
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  /**
   * Content of the opened dropdown
   */
  children: PropTypes.node.isRequired,

};

Dropdown.defaultProps = {
  className: '',
  align: BOTTOM_CENTER,
};

export default memo(Dropdown);
