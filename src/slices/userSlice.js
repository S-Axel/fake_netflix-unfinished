import * as Realm from 'realm-web';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const actionApiLogin = createAsyncThunk(
  'user/apiLogin',
  async (arg, thunkAPI) => {
    const credentials = Realm.Credentials.emailPassword(arg.email, arg.password);
    await thunkAPI.extra.realmApp.logIn(credentials);
  },
);

const initialState = {
  loading: false,
  connected: false,
};

const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actionApiLogin.pending, (state, action) => {
        console.log('apiLogin/pending/action: ', action);
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(actionApiLogin.fulfilled, (state, action) => {
        console.log('apiLogin/fulfilled/action: ', action);
        return {
          ...state,
          connected: true,
          loading: false,
        };
      })
      .addCase(actionApiLogin.rejected, (state, action) => {
        console.log('apiLogin/rejected/action: ', action);
        return {
          ...state,
          loading: false,
        };
      });
  },
});

export { actionApiLogin };

export default counterSlice.reducer;
