import axios from 'axios';
import humps from 'humps';
import { Platform } from 'react-native';

// const localhost = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'
const localhost = 'localhost'

export const update = user => {
    return axios.patch(
        `http://${localhost}:3000/api/user`,
        { user },
        // { withCredentials: true }
    )
};