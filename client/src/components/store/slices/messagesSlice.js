import { createSlice } from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: { messagesArr: null },
  reducers: {
    fetch_messages: (state, action) => {
      state.messagesArr = action.payload;
    },
    remove_messages: (state) => {
      state.messagesArr = [];
    },
  },
});

export const {fetch_messages, remove_messages} = messagesSlice.actions

export const selectMessages = (state) => state.messages.messagesArr

export default messagesSlice.reducer

