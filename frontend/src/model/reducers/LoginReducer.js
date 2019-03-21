import * as Actions from '../actions/LoginActions';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loggedIn: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.PROCESSING:
            return {
                ...state,
                error: undefined
            };
        case Actions.LOGIN_SUCCESSFUL:
            return {
                ...state,
                token: action.data.token
            };
        case Actions.LOGIN_FAILURE:
            return {
                ...state,
                error: action.data
            };
        default:
            return state;
    }
};

export default loginReducer;