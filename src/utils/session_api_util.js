import axios from 'axios';
import humps from 'humps';

export const login = user => {
    return axios.post(
        '/api/session', 
        { user }, 
        { withCredentials: true }
    )
};

export const getCurrentUser = () => {
    return axios.get('/api/session', 
        {
            withCredentials: true,
        },
    )
}

export const signup = user => {
    return axios.post(
        '/api/users', 
        { user }, 
        { withCredentials: true }
    )
};

export const logout = () => {
    return axios.delete(
        '/api/session',
        { withCredentials: true }
    )
};