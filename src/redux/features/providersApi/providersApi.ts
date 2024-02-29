import { baseApi } from "@/redux/api/baseApi";


const supplyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProviders: builder.query({
            query: () => ({
                url: '/providers'
            }),
            providesTags: ['provider']
        }),

    })
})

export const { useGetAllProvidersQuery } = supplyApi