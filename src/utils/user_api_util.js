import axios from 'axios';
import humps from 'humps';

export const update = user => {
    return axios.patch(
        'http://localhost:3000/api/user',
        { user },
        // { withCredentials: true }
    )
};