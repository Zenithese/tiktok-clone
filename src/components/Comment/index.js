import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Comment = () => {

    return (
        <View style={styles.commentBanner}>
            <View style={styles.leftSide}>
                <View style={styles.profileImage}>
                    
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.username}>Username</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.likesContainer} >
                <Fontisto name={'heart'} size={14} color={'red'} />
                <Text style={styles.likesCount} >777</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Comment;