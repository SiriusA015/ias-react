import store from '../reducers';
import axios from "axios";
var state = store.getState();

export const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((request) => {
    console.log('[API Request] : ', request);
    // console.log("111", state.auth);
    /* add auth headers */
    state = store.getState();
    if (state.auth.token) {
        request.headers['Authorization'] = state.auth.tokenType + ' ' + state.auth.token;
        request.headers['Content-Type'] = 'application/json';
    }
    // if (sessionStorage.getItem("authToken")) {
    //   request.headers["Authorization"] =
    //     sessionStorage.getItem("authTokenType") +
    //     " " +
    //     sessionStorage.getItem("authToken");
    //   request.headers["Content-Type"] = "application/json";
    // }
    return request;
});

api.interceptors.response.use(
    (response) => {
        console.log('[API Response]', response);
        return response;
    },
    (error) => {
        console.log('[API ERROR]', error);
        // store.dispatch({ type: 'auth_logOut' });
        if (error?.response?.status === 401) {
            store.dispatch({ type: 'auth_logOut' });
        }
        return Promise.reject(error);
    }
);