export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const PROCESSING = 'PROCESSING';

const loginSuccessful = (authData) => {
    return {type: LOGIN_SUCCESSFUL, data: authData}
};

const processing = () => {
    return {type: PROCESSING}
};

const loginFailure = (reason) => {
    return {type: LOGIN_FAILURE, data: reason}
};

export const login = (userId, password) => {
    const loginRequest = {
        username: userId,
        password: password
    };

    return (dispatch => {
        dispatch(processing());
    });
};