import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './slices/messagesSlice';
import commentsReducer from './slices/commentsSlice';
import profilesReducer from './slices/profilesSlice';

export default configureStore({
  reducer: {
    profiles: profilesReducer,
    comments: commentsReducer,
    messages: messagesReducer,
  },
});
