/* eslint-disable no-restricted-syntax */
import axios from 'axios';
import apiSlice from '../api/apiSlice';

const leadsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLeads: builder.query({
      query: () => '/lead',
      providesTags: ['allLeads'],
    }),
    //     time, date, remark, images, creName,
    //     phone, name, address, status, visitCharge,
    //     projectStatus, projectLocation, workScope, source, positive,
    //   }) => {
    //     const meetingData = { time, date };

    //     // const formData = new FormData();
    //     // formData.append('name', name);
    //     // formData.append('phone', phone);
    //     // formData.append('address', address);
    //     // formData.append('status', status);
    //     // formData.append('visitCharge', visitCharge);
    //     // formData.append('projectStatus', projectStatus);
    //     // formData.append('projectLocation', projectLocation);
    //     // formData.append('workScope', workScope);
    //     // formData.append('source', source);
    //     // formData.append('positive', positive);
    //     // formData.append('remark', remark);

    //     // // Append each image file to the FormData
    //     // images.forEach((image) => {
    //     //   formData.append('images', image);
    //     // });

    //     // formData.append('meetingData', JSON.stringify(meetingData));
    //     // formData.append('creName', creName);

    //     return {
    //       url: '/lead',
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //       },
    //       body: {
    //         remark,
    //         images,
    //         creName,
    //         meetingData,
    //         phone,
    //         name,
    //         address,
    //         status,
    //         visitCharge,
    //         projectStatus,
    //         projectLocation,
    //         workScope,
    //         source,
    //         positive,
    //       },
    //     };
    //   },
    // }),

    addLeads: builder.mutation({
      query: (data) => ({
        url: '/lead',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['allLeads'],
    }),

    addComment: builder.mutation({
      queryFn: async ({ data, id }) => {
        try {
          const formData = new FormData();

          if (data.images && data.images.length > 0) {
            // If images are present, append them to the FormData
            for (const image of data.images) {
              formData.append('images', image);
            }
          }

          formData.append('creName', data.creName);
          formData.append('remark', data.remark);

          // Make a POST request to localhost:5000/comment using axios
          const response = await axios.post(`http://localhost:5000/lead/comment/${id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          return { data: response };
        } catch (error) {
          console.log(error);
          return { error: 'some error occurred' };
        }
      },
    }),

    updateLeads: builder.mutation({
      query: ({ data, id }) => ({
        url: `/lead/${id}`,
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
  useAddCommentMutation,
  useUpdateLeadsMutation,
  useDeleteLeadsMutation,
} = leadsAPI;
