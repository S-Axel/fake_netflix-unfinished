import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import profileImg from '../../../../../assets/images/profile_picture.png';

/**
 * @component
 */
function DropdownTriggerButton({ className, ...rest }) {
  return (
    <div
      className={classNames('dropdown-trigger-button', className)}
      {...rest}
    >
      <img className="dropdown-trigger-button__picture" src={profileImg} alt="profile" />
      <FontAwesomeIcon className="dropdown-trigger-button__caret" icon={faCaretDown} />
    </div>
  );
}

DropdownTriggerButton.propTypes = {
  className: PropTypes.string,
};

DropdownTriggerButton.defaultProps = {
  className: '',
};

export default memo(DropdownTriggerButton);
