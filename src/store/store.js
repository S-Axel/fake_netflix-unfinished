import { configureStore } from '@reduxjs/toolkit';
import reducers from '../reducers';

export default configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }),
  devTools: process.env.NODE_ENV !== 'production',
});
