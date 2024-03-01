import { baseApi } from "@/redux/api/baseApi";


const volunteerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createVolunteer: builder.mutation({
            query: (supplyData) => ({
                url: '/create-volunteer',
                method: "POST",
                body: supplyData
            }),
            invalidatesTags: ['volunteer']
        }),

        getAllVolunteer: builder.query({
            query: () => ({
                url: '/volunteer'
            }),
            providesTags: ['volunteer']
        }),

        getSingleVolunteer: builder.query({
            query: (id) => ({
                url: `/volunteer/${id}`
            }),
            providesTags: ['volunteer']
        }),

        deleteVolunteer: builder.mutation({
            query: (id) => ({
                url: `/volunteer/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['volunteer']
        }),

        updateVolunteer: builder.mutation({
            query: ({ id, updatedSupplyData }) => ({
                url: `/volunteer/${id}`,
                method: 'PATCH',
                body: updatedSupplyData
            }),
            invalidatesTags: ['volunteer']
        }),
    })
})

export const { useCreateVolunteerMutation, useGetAllVolunteerQuery, useGetSingleVolunteerQuery, useDeleteVolunteerMutation, useUpdateVolunteerMutation } = volunteerApi