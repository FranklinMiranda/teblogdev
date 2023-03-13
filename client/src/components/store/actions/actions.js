import * as ACTION_TYPES from './action_types';

// auth_reducer Actions

export const add_db_profile = (profile) => {
  return {
    type: ACTION_TYPES.ADD_DB_PROFILE,
    payload: profile,
  };
};

export const remove_db_profile = () => {
  return {
    type: ACTION_TYPES.REMOVE_DB_PROFILE,
  };
};


// post_reducer Actions

export const set_db_posts = (posts) => {
  return {
    type: ACTION_TYPES.FETCH_DB_POSTS,
    payload: posts
  }
}

export const remove_db_posts = () => {
  return {
    type: ACTION_TYPES.REMOVE_DB_POSTS
  }
}