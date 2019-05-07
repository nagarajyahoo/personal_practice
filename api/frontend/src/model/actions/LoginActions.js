import * as httputils from '../../utils/HttpUtils';

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGOUT_SUCCESSFUL = 'LOGOUT_SUCCESSFUL';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const PROCESSING = 'PROCESSING';
export const GOT_ROLE_SUCCESSFUL = 'GOT_ROLE_SUCCESSFUL';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const ADMIN = 'admin';

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
    localStorage.removeItem(ADMIN);
    return {type: LOGOUT_SUCCESSFUL}
};

export const checkUserRole = () => {
    return (dispatch => {
        if(httputils.isLoggedIn()) {
            httputils.get('/api/sksusers/roles')
                .then(res => {
                    if (res.status === 200) {
                        res.json()
                            .then(data => {
                                if (data.roles.indexOf(ADMIN) > -1) {
                                    dispatch({
                                        type: GOT_ROLE_SUCCESSFUL,
                                        data: ADMIN
                                    });
                                }
                            });
                    }
                });
        }
    })
};

export const getUserRole = (token) => {
    return (dispatch => {
        fetch('/api/sksusers/roles', {
            method: "GET",
            mode: "cors",
            headers: {
                "Authorization": "Bearer " + token[ACCESS_TOKEN_KEY]
            }
        }).then(res => {
            if (res.status === 200) {
                res.json().then(data => {
                    if (data.roles.indexOf(ADMIN) > -1) {
                        dispatch({
                            type: GOT_ROLE_SUCCESSFUL,
                            data: ADMIN
                        });
                    }
                })
            }
        });
    });
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

        return fetch('/oauth/token', {
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
                        dispatch(getUserRole(data));
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