import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import postsReducer from './slices/postsSlice';
import profilesReducer from './slices/profilesSlice';
import commentsReducer from './slices/commentsSlice';
import messagesReducer from './slices/messagesSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    profiles: profilesReducer,
    comments: commentsReducer,
    messages: messagesReducer,
  },
});
