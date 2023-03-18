import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: { postsArr: null },
  reducers: {
    fetch_posts: (state, action) => {
      state.postsArr = action.payload;
    },
    remove_posts: (state) => {
      state.postsArr = [];
    },
  },
});

export const { fetch_posts, remove_posts } = postsSlice.actions;

export const selectPosts = (state) => state.posts.postsArr;

export default postsSlice.reducer;
