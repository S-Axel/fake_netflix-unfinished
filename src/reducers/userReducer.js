import { createReducer } from '@reduxjs/toolkit';
import { thunkApiLogin } from '../middlewares/thunkMiddleware';

const initialState = {};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(thunkApiLogin.pending, (state) => ({
      ...state,
      loading: true,
    }))
    .addCase(thunkApiLogin.fulfilled, (state) => ({
      ...state,
      loading: false,
      connected: true,
    }))
    .addCase(thunkApiLogin.rejected, (state) => ({
      ...state,
      loading: false,
    }));
});

export default userReducer;
