import * as Actions from '../actions/LoginActions';
import {LOGOUT_SUCCESSFUL} from "../actions/LoginActions";

const initialState = {
    token: null,
    userId: null,
    error: null,
    loggedIn: false,
    processing: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.PROCESSING:
            return {
                ...state,
                loggedIn: false,
                error: undefined,
                processing: true
            };
        case Actions.LOGIN_SUCCESSFUL:
            return {
                ...state,
                error: null,
                loggedIn: true,
                processing: false,
                token: action.data
            };
        case Actions.LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false,
                processing: false,
                error: action.data
            };
        case LOGOUT_SUCCESSFUL:
            return initialState;
        default:
            return state;
    }
};

export default loginReducer;