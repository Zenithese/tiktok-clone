import { RECEIVE_HASHTAGS, RECEIVE_HASHTAG, REMOVE_HASHTAG } from '../actions/hashtags_actions'

const hashtagsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_HASHTAGS:
            return action.hashtags
        case RECEIVE_HASHTAG:
            return { ...state, [action.hashtag.id]: action.hashtag }
        case REMOVE_HASHTAG:
            const newState = { ...state };
            delete newState[action.hashtag.id];
            return newState;
        default:
            return state;
    }
};

export default hashtagsReducer;