import * as httputils from '../../utils/HttpUtils';

export const REGISTRATION_SUCCESSFUL = 'registration_successful';
export const REGISTRATION_FAILED = 'registration_failed';
export const REGISTRATION_IN_PROGRESS = 'registration_in_progress';

const registrationSuccessful = (data) => {
    return {
        type: REGISTRATION_SUCCESSFUL,
        data: data
    }
};

export const registrationInProgress = () => {
    return {
        type: REGISTRATION_IN_PROGRESS
    }
};

export const registerUser = (userDetails) => {
    return (dispatch) => {
        httputils.post('/public/register', userDetails)
            .then(response => {
                if (response.status === 200) {
                    response.json()
                        .then(data => {
                            dispatch(registrationSuccessful(data));
                        })
                        .catch(error => {
                            console.log('error', error);
                        })
                }
            })
            .catch(error => {
                console.error(error);
            })
    }
};