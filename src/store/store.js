import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';

const reducers = {
  user: userReducer,
};

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: true,
    immutableCheck: true,
    serializableCheck: true,
  }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
