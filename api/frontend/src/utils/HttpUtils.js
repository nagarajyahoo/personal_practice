const serverUrl = 'http://localhost:8080';
const ACCESS_TOKEN_KEY = 'access_token';

export const get = (url) => {
    return fetch(serverUrl + url, {
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

export const post = (url, body) => {
    return fetch(serverUrl + url, {
        method: "POST",
        // mode: "same-origin",
        // mode: "cors",
        // cache: "no-cache",
        // credentials: "include",
        headers: {
            "Content-Type": "application/json"
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
  return localStorage.getItem(ACCESS_TOKEN_KEY) !== null;
};

