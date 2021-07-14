export const SET_VIEWABLE_COMMENTS = "SET_VIEWABLE_COMMENTS";

export const setViewableComments = (comments) => {
    return {
        type: SET_VIEWABLE_COMMENTS,
        comments
    }
};