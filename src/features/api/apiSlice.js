import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  }),
  endpoints: (builder) => ({}),
});

export default apiSlice;
