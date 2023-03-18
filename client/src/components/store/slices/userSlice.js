import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { profile: null },
  reducers: {
    fetch_user: (state, action) => {
      state.profile = action.payload;
    },
    remove_user: (state) => {
      state.profile = null;
    },
  },
});

export const {fetch_user, remove_user} = userSlice.actions

export const selectUser = (state) => state.user.profile

export default userSlice.reducer
