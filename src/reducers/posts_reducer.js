import { RECEIVE_POSTS } from '../actions/posts_actions'
import { RECEIVE_POST, DELETE_POST } from '../actions/likes_actions'

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_POST:
            return { ...state, [action.post.id]: action.post }
        case DELETE_POST:
            const newState = { ...state };
            delete newState[action.post.id];
            return newState;
        default:
            return state;
    }
};

export default postsReducer;