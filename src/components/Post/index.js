import React, { useState } from 'react';
import styles from './styles';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SpinningAudioTrackImageThatLooksLikeARecord from './SpinningAudioTrackImageThatLooksLikeARecord'

const Post = ({ post }) => {

    const [paused, setPaused] = useState(false)

    const onPress = () => {
        setPaused(!paused);
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPress} >
                <View >
                    <Video
                        source={{
                            uri: post.videoUri,
                        }}
                        style={[styles.video, { backgroundColor: 'darkblue'}]}
                        resizeMode={'cover'}
                        onError={(e: LoadError) => console.log(e)}
                        // repeat={true}
                        paused={paused}
                    />


                    <View style={styles.uiContainer}>
                        <View style={styles.actionsContainer}>
                            <View style={styles.profileImageContainer}>
                                <Image 
                                    style={styles.profileImage} 
                                    source={{ uri: post.user.imageUri }} >
                                </Image>
                            </View>
                            <View style={styles.likesContainer}>
                                <Fontisto name={'heart'} size={38} color='white' />
                                <Text style={styles.count} >{post.likes}</Text>
                            </View>
                            <View style={styles.commentsContainer}>
                                <FontAwesome name={'commenting'} size={40} color="white" />
                                <Text style={styles.count} >{post.comments}</Text>
                            </View>
                            <View style={styles.shareContainer}>
                                <Fontisto name={'share-a'} size={35} color='white' />
                                <Text style={styles.count} >{post.shares}</Text>
                            </View>
                        </View>

                        <View style={styles.infoContainer}>
                            <View>
                                <Text style={styles.handle}>@{post.user.username}</Text>
                                <Text style={styles.description}>{post.description}</Text>
                                <View style={styles.audioInfo}>
                                    <Entypo name={'beamed-note'} size={24} color='white' />
                                    <Text style={styles.audio}>{post.audioName}</Text>
                                </View>
                            </View>

                            <SpinningAudioTrackImageThatLooksLikeARecord uri={post.audioImage} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Post;

{/* <View style={styles.audioImageContainer}>
    <Image
        style={[styles.audioImage, {
            transform: [{ rotate: `${rotateNum}deg` }]
        }]}
        source={{ uri: post.audioImage }} >
    </Image>
</View> */}