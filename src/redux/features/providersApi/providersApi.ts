import { baseApi } from "@/redux/api/baseApi";


const supplyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSupply: builder.query({
            query: () => ({
                url: '/providers'
            }),
            providesTags: ['provider']
        }),

    })
})

export const { useGetAllSupplyQuery } = supplyApi