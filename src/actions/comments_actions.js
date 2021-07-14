import * as APIUtil from '../utils/comments_api_util'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"

const receiveComments = (comments) => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

export const fetchComments = () => dispatch => {
    return APIUtil.fetchComments().then(comments => {
        dispatch(receiveComments(comments.data))
    })
}