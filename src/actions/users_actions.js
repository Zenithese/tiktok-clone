import * as APIUtil from '../utils/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

export const updateUser = user => dispatch => (
    APIUtil.update(user).then(user => (
        dispatch(receiveCurrentUser(user.data))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);