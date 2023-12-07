import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import leadReducer from '../features/leads/leadSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    leads: leadReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
