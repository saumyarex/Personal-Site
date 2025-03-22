import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsData: null,
};

const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.postsData = action.payload;
    },
  },
});

export const { getPosts } = postsSlice.actions;

export default postsSlice.reducer;
