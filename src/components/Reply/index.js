import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Reply = ({ body, username, recipient, likes }) => {

    const [liked, setLiked] = useState(false)

    const onLikePress = () => {
        setLiked(!liked)
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
                    <Pressable onPress={() => console.warn('pressed')}>
                        <Text style={styles.reply}>Reply</Text>
                    </Pressable>
                </View>

                <TouchableOpacity style={styles.likesContainer} onPress={onLikePress}>
                    <Fontisto name={'heart'} size={14} color={liked ? 'red' : 'gray'} />
                    <Text style={styles.likesCount} >{likes.length + liked}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Reply;