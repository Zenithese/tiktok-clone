import axios from 'axios';
import humps from 'humps';
import { Platform } from 'react-native';

// const localhost = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'
const localhost = 'localhost'

export const createHashtag = hashtag => {
    return axios.post(
        `http://${localhost}:3000/api/hashtags`,
        { hashtag },
        // { withCredentials: true }
    )
};

export const fetchHashtags = () => {
    return axios.get(`http://${localhost}:3000/api/hashtags`)
}

export const deleteHashtag = id => {
    return axios.delete(`http://${localhost}:3000/api/hashtags/${id}`)
};