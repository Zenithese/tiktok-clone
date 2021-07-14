import axios from 'axios';
import humps from 'humps';

export const fetchComments = () => {
    return axios.get('http://localhost:3000/api/comments',
        {
            transformResponse: [
                ...axios.defaults.transformResponse,
                data => humps.camelizeKeys(data)
            ],
        }
    )
};