import axios from 'axios';
import humps from 'humps';

export const createLike = like => {
    return axios.post(
        'http://localhost:3000/api/likes',
        { like },
        // { withCredentials: true }
    )
};

export const deleteLike = id => {
    return axios.delete(`http://localhost:3000/api/likes/${id}`)
};