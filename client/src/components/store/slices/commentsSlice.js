import { createSlice } from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: { commentsArr: null },
  reducers: {
    fetch_comments: (state, action) => {
      state.commentsArr = action.payload;
    },
    remove_comments: (state) => {
      state.commentsArr = [];
    },
  },
});

export const {fetch_comments, remove_comments} = commentsSlice.actions

export const selectComments = (state) => state.comments.commentsArr

export default commentsSlice.reducer

