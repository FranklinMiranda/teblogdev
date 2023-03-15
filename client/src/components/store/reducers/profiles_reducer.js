import * as ACTION_TYPES from "../actions/action_types"

export const initialState = {
    profiles: null
}

export const ProfilesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.FETCH_PROFILES:
            return {
                ...state,
                profiles: action.payload
            }
        case ACTION_TYPES.REMOVE_PROFILES:
            return {
                ...state,
                profiles: []
            }
        default:
            return state
    }
}