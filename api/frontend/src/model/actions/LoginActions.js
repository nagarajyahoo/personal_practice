export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGOUT_SUCCESSFUL = 'LOGOUT_SUCCESSFUL';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const PROCESSING = 'PROCESSING';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

const loginSuccessful = (token) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token[ACCESS_TOKEN_KEY]);
    localStorage.setItem(REFRESH_TOKEN_KEY, token[REFRESH_TOKEN_KEY]);
    return {type: LOGIN_SUCCESSFUL, data: token}
};

const processing = () => {
    return {type: PROCESSING}
};

const loginFailure = (reason) => {
    return {type: LOGIN_FAILURE, data: reason}
};

export const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    return {type: LOGOUT_SUCCESSFUL}
};

export const login = (username, password) => {
    return (dispatch => {
        //let's say processing
        dispatch(processing());

        const jsonData = {
            username: username,
            password: password,
            grant_type: 'password'
        };

        const formData = new FormData();
        for (const key in jsonData) {
            formData.append(key, jsonData[key]);
        }

        return fetch('http://localhost:8080/oauth/token', {
            method: "POST",
            mode: "cors",
            credentials: 'include',
            headers: {
                "authorization": "Basic U2tzV2ViQ2xpZW50Om5tckAxMjM="
            },
            body: formData
        }).then(response => {
            if (response.status === 200) {
                response.json()
                    .then(data => {
                        dispatch(loginSuccessful(data));
                    }).catch(err => {
                    dispatch(loginFailure('Login failed'))
                })
            } else {
                dispatch(loginFailure('Login failed'))
            }

        }).catch(error => {
            dispatch(loginFailure('Login failed'))
        });
    });
};