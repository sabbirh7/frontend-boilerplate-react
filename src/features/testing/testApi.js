import apiSlice from "../api/apiSlice";

const testApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getJsonPlaceHolderPost: build.query({
            query: () => ({
                url: "posts",
                method: "GET"
            }),
            providesTags: ["json-placeholder-post"],
            transformResponse: (response) => response
        })
    })
});

export const {
    useGetJsonPlaceHolderPostQuery
} = testApi;
