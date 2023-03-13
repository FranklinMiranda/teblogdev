import React, { useReducer } from 'react';
import GlobalState from './components/utils/context';
import * as ACTIONS from './components/store/actions/actions';

import * as AuthReducer from './components/store/reducers/auth_reducer';

import App from './App';

const ContextState = () => {
  // Auth Reducer
  const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer.AuthReducer, AuthReducer.initialState);

  const handleAddDBProfile = (profile) => {
    dispatchAuthReducer(ACTIONS.add_db_profile(profile));
  };

  const handleRemoveDBProfile = () => {
    dispatchAuthReducer(ACTIONS.remove_db_profile());
  };

  return (
    <GlobalState.Provider
      value={{
        //Auth Reducer
        dbProfileState: stateAuthReducer.db_profile,

        handleAddDBProfile: (profile) => handleAddDBProfile(profile),
        handleRemoveDBProfile: () => handleRemoveDBProfile(),
      }}
    >
      <App />
    </GlobalState.Provider>
  );
};

export default ContextState;
