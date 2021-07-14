import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Reply = () => {

    return (
        <View style={styles.container}>
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
                </View>

                <TouchableOpacity style={styles.likesContainer} >
                    <Fontisto name={'heart'} size={14} color={'red'} />
                    <Text style={styles.likesCount} >777</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Reply;