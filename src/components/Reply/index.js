import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/likes_actions';
import { setCommentable } from '../../actions/commentable_actions';

const mapStateToProps = ({ session: { auth } }) => {
    return {
        userId: auth.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (id) => dispatch(deleteLike(id)),
        setCommentable: (commentable) => dispatch(setCommentable(commentable))
    }
}

const Reply = ({ setCommentable, userId, replyId, createLike, deleteLike, body, username, recipient, likes }) => {

    const onReplyPress = () => {
        setCommentable({
            type: "Comment",
            id: replyId
        })
    }

    const onLikePress = () => {
        const like = {
            likeable_type: "Comment",
            likeable_id: replyId,
            user_id: userId
        }
        likes && likes[userId] ? deleteLike(likes[userId].id) : createLike(like)
    }

    return (
        <View style={styles.container}>
            <View style={styles.commentBanner}>
                <View style={styles.profileImageContainer}>
                    <View style={styles.profileImage}>

                    </View>
                </View>
                <View style={styles.center}>
                    <View style={styles.usernameContainer}>
                        <Text style={styles.username}>{username}</Text>
                        {
                            recipient && 
                            <View style={styles.recipientContainer}>
                                <View style={styles.recipientCaretContainer}>
                                    <Fontisto name={'caret-right'} size={10} color={'gray'} />
                                </View>
                                <Text style={styles.username}>{recipient}</Text>
                            </View>
                        }
                    </View>
                    <View style={styles.commentContainer}>
                        <Text style={styles.comment}>{body}</Text>
                    </View>
                    <Pressable onPress={onReplyPress}>
                        <Text style={styles.reply}>Reply</Text>
                    </Pressable>
                </View>

                <TouchableOpacity style={styles.likesContainer} onPress={onLikePress}>
                    <Fontisto name={'heart'} size={14} color={likes && likes[userId] ? 'red' : 'gray'} />
                    <Text style={styles.likesCount} >{likes ? Object.values(likes).length : 0}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Reply);