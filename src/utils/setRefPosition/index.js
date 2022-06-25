import { BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT } from '../../constants/alignPositions';

const setRefPositionBottomLeft = ({ current: ref }) => {
  // eslint-disable-next-line no-param-reassign
  ref.style.left = 0;
};

const setRefPositionBottomCenter = ({ current: ref }, { current: parent }) => {
  // eslint-disable-next-line no-param-reassign
  ref.style.left = `${(-(ref.offsetWidth / 2) + parent.offsetWidth / 2)}px`;
};

const setRefPositionBottomRight = ({ current: ref }) => {
  // eslint-disable-next-line no-param-reassign
  ref.style.right = 0;
};

const setRefPosition = (position, ref, parent) => {
  switch (position) {
    case BOTTOM_LEFT:
      setRefPositionBottomLeft(ref);
      break;
    case BOTTOM_CENTER:
      setRefPositionBottomCenter(ref, parent);
      break;
    case BOTTOM_RIGHT:
      setRefPositionBottomRight(ref);
      break;
    default:
      setRefPositionBottomCenter(ref, parent);
  }
};

export { setRefPositionBottomLeft, setRefPositionBottomCenter, setRefPositionBottomRight };
export default setRefPosition;
