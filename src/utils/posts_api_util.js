import axios from 'axios';
import humps from 'humps';

export const fetchPosts = () => {
    return axios.get('http://localhost:3000/api/posts')
    // ,
    //     {
    //         transformResponse: [
    //             ...axios.defaults.transformResponse,
    //             data => humps.camelizeKeys(data)
    //         ],
    //     }
    // )
};