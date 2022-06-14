import { useState } from 'react';
import isAFunction from '../../utils/isAFunction';

const clearStateTimeout = (state) => {
  if (state.timeoutId) {
    clearTimeout(state.timeoutId);
  }
};

const timeoutHandler = (newState, setState) => () => {
  if (isAFunction(newState)) {
    setState((prevState) => ({
      timeoutId: 0,
      value: newState(prevState.value),
    }));
  } else {
    setState({
      timeoutId: 0,
      value: newState,
    });
  }
};

const useDelayedState = (defaultState) => {
  const [state, setState] = useState({
    timeoutId: 0,
    value: defaultState,
  });

  const setDelayedState = (newState, delay) => {
    clearStateTimeout(state);
    const timeoutId = setTimeout(timeoutHandler(newState, setState), delay);
    setState((prevState) => ({ ...prevState, timeoutId }));
  };

  const clearDelayedState = () => {
    clearStateTimeout(state);
    setState((prevState) => ({ ...prevState, timeoutId: 0 }));
  };

  return [state.value, setDelayedState, clearDelayedState];
};

export default useDelayedState;
