import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({}),
});

export default apiSlice;
