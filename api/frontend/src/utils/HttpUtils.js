const serverUrl = 'http://localhost:8080';

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

