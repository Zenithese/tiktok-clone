import * as APIUtil from '../utils/posts_api_util'

export const RECEIVE_POSTS = "RECEIVE_POSTS"

const receivePosts = (posts) => {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export const fetchPosts = () => dispatch => {
    return APIUtil.fetchPosts().then(posts => {
        dispatch(receivePosts(posts.data))
    })
}