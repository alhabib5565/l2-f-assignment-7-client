import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fl2-assingment6-server.vercel.app/api/v1' }),
    endpoints: () => ({}),
    tagTypes: ['supply', 'provider', 'testimonial', 'gratitude']
})