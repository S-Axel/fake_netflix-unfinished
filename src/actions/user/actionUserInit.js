import { createAsyncThunk } from '@reduxjs/toolkit';
import userInit from '../../middlewares/thunkMiddleware/userInit';

/**
 * Redux thunk action to init user authentification
 * @type {function}
 */
const actionUserInit = createAsyncThunk(
  'user/init',
  userInit,
);

export default actionUserInit;
