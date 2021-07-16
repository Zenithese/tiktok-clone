import axios from 'axios';
import humps from 'humps';

export const login = user => {
    return axios.post(
        'http://localhost:3000/api/session',
        { user }, 
        // { withCredentials: true }
    )
};

export const signup = user => {
    return axios.post(
        'http://localhost:3000/api/user',
        { user }, 
        // { withCredentials: true }
    )
};

export const logout = () => {
    return axios.delete(
        'http://localhost:3000/api/session',
        // { withCredentials: true }
    )
};