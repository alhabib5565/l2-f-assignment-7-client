import { baseApi } from "@/redux/api/baseApi";

const gratitudeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createGratitude: builder.mutation({
            query: (gratitudeData) => ({
                url: '/create-gratitude',
                method: "POST",
                body: gratitudeData
            }),
            invalidatesTags: ['gratitude']
        }),

        getAllGratitude: builder.query({
            query: () => ({
                url: '/gratitudes'
            }),
            providesTags: ['gratitude']
        }),

        getSingleGratitude: builder.query({
            query: (id) => ({
                url: `/gratitude/${id}`
            }),
            providesTags: ['gratitude']
        }),

        deleteGratitude: builder.mutation({
            query: (id) => ({
                url: `/gratitude/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['gratitude']
        }),

        updateGratitude: builder.mutation({
            query: ({ id, updatedGratitudeData }) => ({
                url: `/gratitude/${id}`,
                method: 'PATCH',
                body: updatedGratitudeData
            }),
            invalidatesTags: ['gratitude']
        }),
    })
})

export const { useCreateGratitudeMutation, useGetAllGratitudeQuery, useGetSingleGratitudeQuery, useUpdateGratitudeMutation, useDeleteGratitudeMutation } = gratitudeApi