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
