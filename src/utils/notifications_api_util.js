import axios from 'axios';
import { Platform } from 'react-native';

// const localhost = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'
const localhost = 'localhost'

export const fetchNotifications = (userId) => {
    return axios.get(`http://${localhost}:3000/api/notifications/?user_id=${userId}`)
};

export const updateNotification = (id) => {
    return axios.patch(`http://${localhost}:3000/api/notifications/${id}`)
};