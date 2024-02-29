import { baseApi } from "@/redux/api/baseApi";


const supplyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createSupply: builder.mutation({
            query: (supplyData) => ({
                url: '/create-supply',
                method: "POST",
                body: supplyData
            }),
            invalidatesTags: ['supply']
        }),

        getAllSupply: builder.query({
            query: () => ({
                url: '/supplies'
            }),
            providesTags: ['supply']
        }),

        getSingleSupply: builder.query({
            query: (id) => ({
                url: `/supply/${id}`
            }),
            providesTags: ['supply']
        }),

        deleteSupply: builder.mutation({
            query: (id) => ({
                url: `/supply/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['supply']
        }),

        updateSupply: builder.mutation({
            query: ({ id, updatedSupplyData }) => ({
                url: `/supply/${id}`,
                method: 'PATCH',
                body: updatedSupplyData
            }),
            invalidatesTags: ['supply']
        }),
    })
})

export const { useCreateSupplyMutation, useDeleteSupplyMutation, useGetAllSupplyQuery, useGetSingleSupplyQuery, useUpdateSupplyMutation } = supplyApi