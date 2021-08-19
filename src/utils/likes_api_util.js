import axios from 'axios';
import humps from 'humps';
import { Platform } from 'react-native';

const localhost = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'

export const createLike = like => {
    return axios.post(
        `http://${localhost}:3000/api/likes`,
        { like },
        // { withCredentials: true }
    )
};

export const deleteLike = id => {
    return axios.delete(`http://${localhost}:3000/api/likes/${id}`)
};