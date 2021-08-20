import axios from 'axios';
import humps from 'humps';
import { Platform } from 'react-native';

// const localhost = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'
const localhost = 'localhost'

export const login = user => {
    const res = axios.post(
        `http://${localhost}:3000/api/sessions`,
        { user }, 
        // { withCredentials: true }
    )
    return res
};

export const signup = user => {
    return axios.post(
        `http://${localhost}:3000/api/user`,
        { user }, 
        // { withCredentials: true }
    )
};

export const logout = id => {
    return axios.delete(`http://${localhost}:3000/api/sessions/${id}`)
};

export const validateToken = user => {
    return axios.get(
        `http://${localhost}:3000/api/validate_token/?token=${user.token}&id=${user.id}`,
    )
}