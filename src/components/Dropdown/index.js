import { memo, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';
import Button from '../Button';
import Arrow from '../Arrow';
import { BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT } from '../../constants/alignPositions';
import setRefPosition from '../../utils/setRefPosition';

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
function Dropdown({ className, buttonContent, align, children, ...rest }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const refDropContainer = useRef(null);
  const refDropContent = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    setRefPosition(align, refDropContent, refDropContainer);
  });

  return (
    <div
      ref={refDropContainer}
      className={classNames('dropdown__container', className)}
      {...rest}
    >
      <Button
        className="dropdown__button"
        variant="text"
        color="secondary"
        onClick={toggleDropdown}
      >
        Browse
      </Button>
      <Arrow
        className={classNames('dropdown__arrow', { 'dropdown__arrow--hidden': !dropdownOpen })}
        style={arrowAlignStyle[align]}
      />
      <div ref={refDropContent} className={classNames('dropdown__content', { 'dropdown__content--hidden': !dropdownOpen })}>
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
   * Content of the opened dropdown
   */
  children: PropTypes.node.isRequired,

};

Dropdown.defaultProps = {
  className: '',
  align: BOTTOM_CENTER,
};

export default memo(Dropdown);
