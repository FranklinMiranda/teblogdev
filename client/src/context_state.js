import React, { useReducer } from 'react';
import GlobalState from './components/utils/context';
import * as ACTIONS from './components/store/actions/actions';

import * as AuthReducer from './components/store/reducers/auth_reducer';
import * as PostsReducer from './components/store/reducers/posts_reducer';
import * as CommentsReducer from './components/store/reducers/comments_reducer';

import Landing from './landing';

const ContextState = () => {
  // Auth Reducer
  const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer.AuthReducer, AuthReducer.initialState);

  const handleAddDBProfile = (profile) => {
    dispatchAuthReducer(ACTIONS.add_db_profile(profile));
  };

  const handleRemoveDBProfile = () => {
    dispatchAuthReducer(ACTIONS.remove_db_profile());
  };

  // Post Reducer
  const [statePostsReducer, dispatchPostsReducer] = useReducer(PostsReducer.PostsReducer, PostsReducer.initialState);

  const handleSetPosts = (posts) => {
    dispatchPostsReducer(ACTIONS.set_db_posts(posts));
  };

  const handleRemovePosts = () => {
    dispatchPostsReducer(ACTIONS.remove_db_posts());
  };

  // Comment Reducer
  const [stateCommentsReducer, dispatchCommentsReducer] = useReducer(
    CommentsReducer.CommentsReducer,
    CommentsReducer.initialState
  );

  const handleSetComments = (comments) => {
    dispatchCommentsReducer(ACTIONS.set_comments(comments));
  };

  const handleRemoveComments = () => {
    dispatchCommentsReducer(ACTIONS.remove_comments());
  };

  return (
    <GlobalState.Provider
      value={{
        // Auth Reducer
        // Auth State
        dbProfileState: stateAuthReducer.db_profile,

        handleAddDBProfile: (profile) => handleAddDBProfile(profile),
        handleRemoveDBProfile: () => handleRemoveDBProfile(),

        // Posts Reducer
        // Posts State
        postsState: statePostsReducer.posts,
        handleAddPosts: (posts) => handleSetPosts(posts),
        handleRemovePosts: () => handleRemovePosts(),

        // Comments Reducer
        // Comments State
        commentsState: stateCommentsReducer.comments,
        handleAddComments: (comments) => handleSetComments(comments),
        handleRemoveComments: () => handleRemoveComments(),
      }}
    >
      <Landing />
    </GlobalState.Provider>
  );
};

export default ContextState;
