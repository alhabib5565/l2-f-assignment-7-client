import { baseApi } from "@/redux/api/baseApi";


const testimonialApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createTestimonial: builder.mutation({
            query: (supplyData) => ({
                url: '/create-testimonial',
                method: "POST",
                body: supplyData
            }),
            invalidatesTags: ['testimonial']
        }),

        getAllTestimonial: builder.query({
            query: () => ({
                url: '/testimonial'
            }),
            providesTags: ['testimonial']
        }),

        getSingleTestimonial: builder.query({
            query: (id) => ({
                url: `/testimonial/${id}`
            }),
            providesTags: ['testimonial']
        }),

        deleteTestimonial: builder.mutation({
            query: (id) => ({
                url: `/testimonial/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['testimonial']
        }),

        updateTestimonial: builder.mutation({
            query: ({ id, updatedSupplyData }) => ({
                url: `/testimonial/${id}`,
                method: 'PATCH',
                body: updatedSupplyData
            }),
            invalidatesTags: ['testimonial']
        }),
    })
})

export const { useCreateTestimonialMutation, useGetAllTestimonialQuery, useGetSingleTestimonialQuery, useUpdateTestimonialMutation, useDeleteTestimonialMutation } = testimonialApi