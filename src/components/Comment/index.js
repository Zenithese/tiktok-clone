import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Reply from '../Reply/index';

const Comment = () => {

    const replies = new Array(2).fill(0).map(_ => <Reply />)

    const [visible, setVisible] = useState(false)

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
                            <Text style={styles.username}>Username</Text>
                        </View>
                        <View style={styles.commentContainer}>
                            <Text style={styles.comment}>Lorem ipsum dolor sit amet, conse ctetur adipiscing</Text>
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

                    <TouchableOpacity style={styles.likesContainer} >
                        <Fontisto name={'heart'} size={14} color={'red'} />
                        <Text style={styles.likesCount} >777</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {visible && replies}
        </View>
    )
}

export default Comment;