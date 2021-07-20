import * as APIUtil from '../utils/comments_api_util'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"

export const RECEIVE_POST = "RECEIVE_POST"

const receiveComments = (comments) => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const receivePost = (post) => {
    return {
        type: RECEIVE_POST,
        post
    }
}

export const fetchComments = () => dispatch => {
    return APIUtil.fetchComments().then(comments => {
        dispatch(receiveComments(comments.data))
    })
}

export const createComment = (comment) => dispatch => {
    return APIUtil.createComment(comment).then(post => {
        dispatch(receivePost(post.data))
    })
}