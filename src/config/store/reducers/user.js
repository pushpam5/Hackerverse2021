import { SET_USER_DETAILS, SET_AUTH_DETAILS, SET_LOGGED_IN, SET_IS_ONBOARDED, LOGOUT } from '../actionTypes';

const initialState = {
    isLoggedIn: false,
    user: {},
    isOnBoarded: false,
}

export default function (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case SET_USER_DETAILS:
            let newUserDetails = Object.assign({}, state.user);
            newUserDetails = { ...newUserDetails, ...action.details };
            return {
                ...state,
                user: newUserDetails
            };
        case SET_AUTH_DETAILS:
            return { ...state, auth: action.auth }
        case SET_LOGGED_IN:
            return { ...state, isLoggedIn: action.val }
        case SET_IS_ONBOARDED:
            return { ...state, isOnBoarded: action.val }
        case LOGOUT:
            return initialState
        default:
            return state;
    }
}