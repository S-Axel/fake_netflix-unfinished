import { createAsyncThunk } from '@reduxjs/toolkit';
import apiLogin from './apiLogin';

/**
 * Redux thunk action to try login the user on the server
 * @type {*}
 */
const thunkApiLogin = createAsyncThunk(
  'user/apiLogin',
  apiLogin,
);

export { thunkApiLogin };
