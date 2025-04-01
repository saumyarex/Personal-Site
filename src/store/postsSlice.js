import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsData: null,
};

const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.postsData = action.payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
