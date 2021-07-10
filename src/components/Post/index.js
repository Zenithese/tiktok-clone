import React, { useState } from 'react';
import styles from './styles';
import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SpinningAudioTrackImageThatLooksLikeARecord from './SpinningAudioTrackImageThatLooksLikeARecord'

const Post = ({ post }) => {

    const [paused, setPaused] = useState(true)
    const [liked, setLiked] = useState(false)

    const onPress = () => {
        setPaused(!paused);
    }

    const onLikePress = () => {
        setLiked(!liked)
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPress} >
                <View>
                    <Video
                        source={{
                            uri: post.video_uri,
                        }}
                        style={styles.video}
                        resizeMode={'cover'}
                        // onError={(e: LoadError) => console.log(e)}
                        repeat={true}
                        paused={paused}
                    />


                    <View style={styles.uiContainer}>
                        <View style={styles.actionsContainer}>
                            <View style={styles.profileImageContainer}>
                                <Image 
                                    style={styles.profileImage} 
                                    source={{ uri: post.user.image_uri }} >
                                </Image>
                            </View>
                            <TouchableOpacity style={styles.likesContainer} onPress={onLikePress}>
                                <Fontisto name={'heart'} size={38} color={liked ? 'red' : 'white'} />
                                <Text style={styles.count} >{post.likes + liked}</Text>
                            </TouchableOpacity>
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
                                    <Text style={styles.audio}>{post.audio_name}</Text>
                                </View>
                            </View>

                            <SpinningAudioTrackImageThatLooksLikeARecord uri={post.audio_uri} />
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