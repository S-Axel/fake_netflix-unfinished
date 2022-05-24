import { configureStore } from '@reduxjs/toolkit';
import * as Realm from 'realm-web';
import userSlice from '../slices/userSlice';

const reducers = {
  user: userSlice,
};

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        realmApp: new Realm.App({ id: 'fake-netflix-vwzwz' }),
      },
    },
  }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
