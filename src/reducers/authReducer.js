import { createReducer } from '@reduxjs/toolkit';

const initialState = {};

const authReducer = createReducer(initialState, (builder) => {
  builder
  // eslint-disable-next-line no-unused-vars
    .addDefaultCase((state, action) => {});
});

export default authReducer;
