import * as APIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const IS_VALID = 'IS_VALID';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user.data))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => {
    return APIUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user.data))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
};

export const logout = token => dispatch => {
    return APIUtil.logout(token).then(user => (
        dispatch(logoutCurrentUser())
    ))
};

export const validateToken = user => dispatch => {
    return APIUtil.validateToken(user).then(user => (
        dispatch(receiveCurrentUser(user.data))
    ), err => (
        dispatch(logoutCurrentUser()),
        dispatch(receiveErrors(err.responseJSON))
    ))
}