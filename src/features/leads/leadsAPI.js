import apiSlice from '../api/apiSlice';

const leadsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLeads: builder.query({
      query: () => '/lead',
    }),
    addLeads: builder.mutation({
      query: (data) => ({
        url: '/lead',
        method: 'POST',
        body: data,
      }),
    }),
    updateLeads: builder.mutation({
      query: (data) => ({
        url: '/lead',
        method: 'PUT',
        body: data,
      }),
    }),
    deleteLeads: builder.mutation({
      query: (id) => ({
        url: `/lead/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetLeadsQuery,
  useAddLeadsMutation,
  useUpdateLeadsMutation,
  useDeleteLeadsMutation,
} = leadsAPI;
