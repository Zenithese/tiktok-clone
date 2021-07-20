import { SET_COMMENTABLE } from "../actions/commentable_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SET_COMMENTABLE:
            return action.commentable
        default:
            return state;
    }
}