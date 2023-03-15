import * as ACTION_TYPES from '../actions/action_types';

export const initialState = {
  comments: null,
};

export const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case ACTION_TYPES.REMOVE_COMMENTS:
      return {
        ...state,
        comments: [],
      };
    default:
      return state;
  }
};
