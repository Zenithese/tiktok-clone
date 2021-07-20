import axios from 'axios';

export const fetchNotifications = (userId) => {
    return axios.get(`http://localhost:3000/api/notifications/?user_id=${userId}`)
};

export const updateNotification = (id) => {
    return axios.patch(`http://localhost:3000/api/notifications/${id}`)
};