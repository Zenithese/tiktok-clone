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

export const logout = id => {
    return axios.delete(`/api/session/${id}`)
};

export const validateToken = user => {
    return axios.get(
        `http://localhost:3000/api/validate_token/?token=${user.token}&id=${user.id}`,
    )
}