import * as APIUtil from '../utils/posts_api_util'

export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const RECEIVE_POST = "RECEIVE_POST"

const receivePosts = (posts) => {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

const receivePost = (post) => {
    return {
        type: RECEIVE_POST,
        post
    }
}

export const fetchPosts = () => dispatch => {
    return APIUtil.fetchPosts().then(posts => {
        dispatch(receivePosts(posts.data))
    })
}

export const createPost = (post) => dispatch => {
    return APIUtil.createPost(post).then(post => {
        dispatch(receivePost(post.data))
    })
}