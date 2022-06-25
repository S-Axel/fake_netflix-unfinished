/**
 * Checks whether the given onClick event comes from the keyboard or the mouse / touch
 * @param {SyntheticEvent} e Event from a react onClick listener
 * @returns {boolean}
 */
const isOnClickEventFromKeyboard = (e) => (
  e?.screenX === 0 && e?.screenY === 0
  && e?.pageX === 0 && e?.pageY === 0
  && e?.clientX === 0 && e?.clientY === 0
);

export default isOnClickEventFromKeyboard;
