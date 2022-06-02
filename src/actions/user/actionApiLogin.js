import { createAsyncThunk } from '@reduxjs/toolkit';
import apiLogin from '../../middlewares/thunkMiddleware/apiLogin';

/**
 * Redux thunk action to try login the user on the server
 * @type {function}
 */
const actionApiLogin = createAsyncThunk(
  'user/apiLogin',
  apiLogin,
);

export default actionApiLogin;
