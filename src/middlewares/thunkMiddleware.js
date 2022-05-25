import { createAsyncThunk } from '@reduxjs/toolkit';
import postLogin from '../apis/realm/postLogin';

const thunkApiLogin = createAsyncThunk(
  'user/apiLogin',
  async (arg) => {
    try {
      await postLogin(arg.email, arg.password);
    } catch (e) {
      throw new Error('Wrong email, phone number or password. Please try again.');
    }
  },
);

export { thunkApiLogin };
