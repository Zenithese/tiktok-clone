import { RECEIVE_POSTS } from '../actions/posts_actions'

const postsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POSTS:
            const tempFiller = {
                shares: 44,
            }
            const newData = action.posts.map(post => {
                return { ...post, ...tempFiller }
            })

            return newData
        default:
            return state;
    }
};

export default postsReducer;