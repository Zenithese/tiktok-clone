import { RECEIVE_POSTS } from '../actions/posts_actions'

const postsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POSTS:
            
            const tempFiller = {
                user: {
                    id: 'u1',
                    username: 'daviddobrik',
                    imageUri: 'https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg',
                },
                likes: 123,
                comments: 12,
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