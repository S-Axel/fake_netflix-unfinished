import { createAsyncThunk } from '@reduxjs/toolkit';
import apiLogout from '../../middlewares/thunkMiddleware/apiLogout';

/**
 * Redux thunk action to try logging out the user on the server
 * @type {function}
 */
const actionApiLogout = createAsyncThunk(
  'user/apiLogout',
  apiLogout,
);

export default actionApiLogout;
