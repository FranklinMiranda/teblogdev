import * as ACTION_TYPES from '../actions/action_types';

export const initialState = {
  messages: null,
};

export const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case ACTION_TYPES.REMOVE_MESSAGES:
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
};
