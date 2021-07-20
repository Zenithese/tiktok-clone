import { RECEIVE_NOTIFICATIONS } from '../actions/notifications_actions'

const notificationsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_NOTIFICATIONS:
            return action.notifications
        default:
            return state;
    }
};

export default notificationsReducer;