import { SET_VIEWABLE_COMMENTS } from "../actions/viewable_comments_actions";

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case SET_VIEWABLE_COMMENTS:
            return action.comments;
        default:
            return state;
    }
}