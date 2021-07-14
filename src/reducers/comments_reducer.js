import { RECEIVE_COMMENTS } from '../actions/comments_actions'

const commentsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.comments
        default:
            return state;
    }
};

export default commentsReducer;