import { createSlice } from '@reduxjs/toolkit';

export const profilesSlice = createSlice({
  name: 'profiles',
  initialState: { profilesArr: null },
  reducers: {
    fetch_profiles: (state, action) => {
      state.profilesArr = action.payload;
    },
    remove_profiles: (state) => {
      state.profilesArr = [];
    },
  },
});

export const {fetch_profiles, remove_profiles} = profilesSlice.actions

export const selectProfiles = (state) => state.profiles.profilesArr

export default profilesSlice.reducer

