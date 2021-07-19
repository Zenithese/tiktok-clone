import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Reply from '../Reply/index';
import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/likes_actions';

const mapStateToProps = ({ session: { auth } }) => {
    return {
        userId: auth.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (id) => dispatch(deleteLike(id))
    }
}

const Comment = ({ userId, commentId, createLike, deleteLike, comments, body, username, likes }) => {

    const [visible, setVisible] = useState(false)

    const replies = ((flattenedReplies = []) => {
        (function flatten(comments, recipient) {
            comments.forEach(comment => {
                flattenedReplies.push(<Reply userId={userId} replyId={comment.id} body={comment.body} username={comment.username} recipient={recipient} likes={comment.likes} key={comment.id} />);
                if (comment.comments.length) flatten(comment.comments, comment.username);
            })
        })(comments);
        return flattenedReplies;
    })();

    const onLikePress = () => {
        const like = {
            likeable_type: "Comment",
            likeable_id: commentId,
            user_id: userId
        }
        likes && likes[userId] ? deleteLike(likes[userId].id) : createLike(like)
    }

    return (
        <View style={styles.container}>
            <View style={styles.commentContainer}>
                <View style={styles.commentBanner}>
                    <View style={styles.profileImageContainer}>
                        <View style={styles.profileImage}>

                        </View>
                    </View>
                    <View style={styles.center}>
                        <View style={styles.usernameContainer}>
                            <Text style={styles.username}>{username}</Text>
                        </View>
                        <View style={styles.commentContainer}>
                            <Text style={styles.comment}>{body}</Text>
                        </View>
                        <Pressable onPress={() => console.warn('pressed')}>
                            <Text style={styles.reply}>Reply</Text>
                        </Pressable>
                        {
                            replies.length > 0 && 
                                <Pressable onPress={() => setVisible(!visible)}>
                                    <Text style={styles.viewReply}>View replies</Text>
                                </Pressable>
                        }
                    </View>

                    <TouchableOpacity style={styles.likesContainer} onPress={onLikePress}>
                        <Fontisto name={'heart'} size={14} color={likes && likes[userId] ? 'red' : 'gray'} />
                        <Text style={styles.likesCount} >{likes ? Object.values(likes).length : 0}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {visible && replies}
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);