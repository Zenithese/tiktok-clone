import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const sessionReducer = (state = false, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return true;
        case LOGOUT_CURRENT_USER:
            return false;
        default:
            return state;
    }
};

export default sessionReducer;
