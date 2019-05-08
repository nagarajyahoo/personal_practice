import * as httputils from '../../utils/HttpUtils';

export const REGISTRATION_SUCCESSFUL = 'registration_successful';
export const REGISTRATION_FAILED = 'registration_failed';
export const REGISTRATION_IN_PROGRESS = 'registration_in_progress';
export const CLEAR_REGISTRATION = 'clear_registration';

const registrationSuccessful = (data) => {
    return {
        type: REGISTRATION_SUCCESSFUL,
        data: data
    }
};

const registrationFailed = () => {
    return {
        type: REGISTRATION_FAILED,
        data: 'registration failed'
    }
};

export const registrationInProgress = () => {
    return {
        type: REGISTRATION_IN_PROGRESS
    }
};

export const clearRegistration = () => {
    return {
        type: CLEAR_REGISTRATION
    }
};

export const registerUser = (userDetails) => {
    console.log(userDetails);
    return (dispatch) => {
        dispatch(registrationInProgress());

        httputils.post('/public/register', userDetails)
            .then(response => {
                if (response.status === 200) {
                    response.json()
                        .then(data => {
                            dispatch(registrationSuccessful(data));
                        })
                        .catch(error => {
                            console.error(error);
                            dispatch(registrationFailed());
                        })
                } else {
                    dispatch(registrationFailed());
                }
            })
            .catch(error => {
                console.error(error);
                dispatch(registrationFailed());
            })
    }
};