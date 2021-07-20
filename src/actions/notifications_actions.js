import * as APIUtil from '../utils/notifications_api_util';

export const RECEIVE_NOTIFICATIONS = "RECEIVE_NOTIFICATIONS"
export const RECEIVE_NOTIFICATION = "RECEIVE_NOTIFICATION"

const receiveNotifications = (notifications) => {
    return {
        type: RECEIVE_NOTIFICATIONS,
        notifications
    }
}

const receiveNotification = (notification) => {
    return {
        type: RECEIVE_NOTIFICATION,
        notification,
    }
}

export const fetchNotifications = (userId) => dispatch => {
    return APIUtil.fetchNotifications(userId).then(notifications => {
        dispatch(receiveNotifications(notifications.data))
    })
}

export const updateNotification = (id) => dispatch => {
    return APIUtil.updateNotification(id).then(notification => {
        dispatch(receiveNotification(notification.data))
    })
}