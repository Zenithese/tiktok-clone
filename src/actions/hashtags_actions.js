import * as APIUtil from '../utils/hashtags_api_util';

export const RECEIVE_HASHTAG = "RECEIVE_HASHTAG"
export const RECEIVE_HASHTAGS = "RECEIVE_HASHTAGS"
export const REMOVE_HASHTAG = "REMOVE_HASHTAG"

const receiveHashtag = (hashtag) => {
    return {
        type: RECEIVE_HASHTAG,
        hashtag,
    }
}

const receiveHashtags = (hashtags) => {
    return {
        type: RECEIVE_HASHTAGS,
        hashtags,
    }
}

const removeHashtag = (id) => {
    return {
        type: REMOVE_HASHTAG,
        id
    }
}


export const createHashtag = (hashtag) => dispatch => {
    return APIUtil.createHashtag(hashtag).then(hashtag =>
        dispatch(
            receiveHashtag(hashtag.data)
        )
    )
};

export const fetchHashtags = () => dispatch => {
    return APIUtil.fetchHashtags().then(hashtags =>
        dispatch(receiveHashtags(hashtags.data))
    )
};

export const deleteHashtag = (id) => dispatch => {
    return APIUtil.deleteHashtag(id).then(hashtag =>
        dispatch(
            removeHashtag(hashtag.data.id)
        )
    )
};