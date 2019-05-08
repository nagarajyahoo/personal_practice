const serverUrl = 'http://localhost:8080';
const ACCESS_TOKEN_KEY = 'access_token';

export const get = (url) => {
    const token = getToken();
    return fetch(url, {
        method: "GET",
        // mode: "same-origin",
        // mode: "cors",
        // cache: "no-cache",
        // credentials: "include",
        headers: token === null ?
            {
                "Content-Type": "application/json"
            } :
            {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
    });
};

export const post = (url, body) => {
    const token = getToken();
    return fetch(url, {
        method: "POST",
        // mode: "same-origin",
        // mode: "cors",
        // cache: "no-cache",
        // credentials: "include",
        headers: token === null ?
            {
                "Content-Type": "application/json"
            } :
            {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
        body: JSON.stringify(body)
    });
};

export const externalget = (url) => {
    return fetch(url, {
        method: "GET",
        // mode: "same-origin",
        // mode: "cors",
        // cache: "no-cache",
        // credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
    });
};

export const isLoggedIn = () => {
    return getToken() !== null;
};

const getToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
};

