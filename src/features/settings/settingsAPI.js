import apiSlice from '../api/apiSlice';

const settingsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFacebookSettings: builder.query({
      query: () => '/settings/facebook',
    }),
    addFacebookSettings: builder.mutation({
      query: (data) => ({
        url: '/settings/facebook',
        method: 'POST',
        body: {
          name: 'facebook',
          settingsData: data,
        },
      }),
    }),
    updateFacebookSettings: builder.mutation({
      query: (data) => ({
        url: '/settings/facebook',
        method: 'PUT',
        body: {
          name: 'facebook',
          settingsData: data,
        },
      }),
    }),
    deleteFacebookSettings: builder.mutation({
      url: '/settings/facebook',
      method: 'DELETE',
    }),
  }),
});

export const {
  useGetFacebookSettingsQuery,
  useAddFacebookSettingsMutation,
  useUpdateFacebookSettingsMutation,
  useDeleteFacebookSettingsMutation,
} = settingsAPI;
