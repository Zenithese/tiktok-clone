import axios from 'axios';
import humps from 'humps';
import { Platform } from 'react-native';

// const localhost = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'
const localhost = 'localhost'

export const fetchComments = () => {
    return axios.get(`http://${localhost}:3000/api/comments`,
        {
            transformResponse: [
                ...axios.defaults.transformResponse,
                data => humps.camelizeKeys(data)
            ],
        }
    )
};

export const createComment = (comment) => {
    return axios.post(
        `http://${localhost}:3000/api/comments`,
        { comment }
    )
}