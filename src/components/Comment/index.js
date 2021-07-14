import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Reply from '../Reply/index';

const Comment = ({ comments, body, username, likes }) => {

    const [visible, setVisible] = useState(false)
    const [liked, setLiked] = useState(false)

    const replies = ((flattenedReplies = []) => {
        (function flatten(comments, recipient) {
            comments.forEach(comment => {
                flattenedReplies.push(<Reply body={comment.body} username={comment.username} recipient={recipient} likes={comment.likes} key={comment.id} />);
                if (comment.comments.length) flatten(comment.comments, comment.username);
            })
        })(comments);
        return flattenedReplies;
    })();

    const onLikePress = () => {
        setLiked(!liked)
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
                        <Fontisto name={'heart'} size={14} color={liked ? 'red' : 'gray'} />
                        <Text style={styles.likesCount} >{likes.length + liked}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {visible && replies}
        </View>
    )
}

export default Comment;