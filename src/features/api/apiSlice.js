import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/"
})

const apiSlice = createApi({
    baseQuery: baseQuery,
    reducerPath: "api",
    tagTypes: ["json-placeholder-post"],
    endpoints: () => ({})
});

export default apiSlice;