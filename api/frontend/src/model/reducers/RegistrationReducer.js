import * as Actions from '../actions/RegistrationActions';

const initialState = {
    regInProgress: false,
    regSuccessful: null
};

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.REGISTRATION_IN_PROGRESS:
            return {
                ...state,
                regInProgress: true,
                regSuccessful: null,
            };
        case Actions.REGISTRATION_SUCCESSFUL:
            return {
                ...state,
                regInProgress: false,
                regSuccessful: true,
            };
        case Actions.REGISTRATION_FAILED:
            return {
                ...state,
                regInProgress: false,
                regSuccessful: false,
            };
        default:
            return {
                ...state
            }
    }
};

export default registrationReducer;