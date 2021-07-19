import * as APIUtil from '../utils/likes_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const RECEIVE_LIKES = "RECEIVE_LIKES"
export const REMOVE_LIKE = "REMOVE_LIKE"

export const RECEIVE_POST =  "RECEIVE_POST"
export const DELETE_POST = "DELETE_POST"

const receiveLike = (like) => {
    return {
        type: RECEIVE_LIKE,
        like,
    }
}

const receiveLikes = (likes) => {
    return {
        type: RECEIVE_LIKES,
        likes,
    }
}

const removeLike = (id) => {
    return {
        type: REMOVE_LIKE,
        id
    }
}

const receivePost = (post) => {
    return {
        type: RECEIVE_POST,
        post
    }
}

const deletePost = (post) => {
    return {
        type: DELETE_POST,
        post
    }
}


export const createLike = (like) => dispatch => {
    return APIUtil.createLike(like).then(post =>
        dispatch(
            // receiveLike(like.data)
            receivePost(post.data)
        )
    )
};

export const fetchLikes = () => dispatch => {
    return APIUtil.fetchLikes().then(likes =>
        dispatch(receiveLikes(likes.data))
    )
};

export const deleteLike = (id) => dispatch => {
    return APIUtil.deleteLike(id).then(post =>
        dispatch(
            // removeLike(like.data.id)
            receivePost(post.data)
        )
    )
};