import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: []
};

const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        }
    }
});

export const { setPosts } = testSlice.actions;

export default testSlice.reducer;

export const getPosts = (state) => state.test.posts;