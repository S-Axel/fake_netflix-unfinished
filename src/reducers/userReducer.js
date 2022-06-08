import { createReducer } from '@reduxjs/toolkit';
import actionLogin from '../actions/user/actionLogin';
import actionApiLogin from '../actions/user/actionApiLogin';
import actionApiLogout from '../actions/user/actionApiLogout';

const initialState = {
  loading: false,
  connected: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionApiLogin.pending, (state) => ({
      ...state,
      loading: true,
    }))
    .addCase(actionApiLogin.fulfilled, (state) => ({
      ...state,
      loading: false,
      connected: true,
    }))
    .addCase(actionApiLogin.rejected, (state) => ({
      ...state,
      loading: false,
    }))
    .addCase(actionLogin, (state) => ({
      ...state,
      connected: true,
    }))
    .addCase(actionApiLogout.fulfilled, (state) => ({
      ...state,
      connected: false,
    }));
});

export default userReducer;

export { actionLogin };
