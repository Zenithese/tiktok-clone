import React, { useEffect, useState, useRef } from 'react';
import styles from './styles';
import { View, Text, TouchableWithoutFeedback, Image, Animated, Easing } from 'react-native';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = ({ post }) => {

    const [paused, setPaused] = useState(false)
    const [rotateNum, setRotateNum] = useState(0)

    const RecordSpinImage = () => {
        const spinAnim = useRef(new Animated.Value(0)).current

        const spin = spinAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        useEffect(() => {
            Animated.timing(
                spinAnim,
                {
                    toValue: 1,
                    duration: 5000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }
            ).start();
        }, [spinAnim])

        return (
            <Animated.Image
                style={[styles.audioImage, {
                    transform: [{ rotate: spin }],
                    // opacity: spinAnim,
                }]}
                source={{ uri: post.audioImage }}
            >
            </Animated.Image>
        );
    }

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
                        style={styles.video}
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

                            

                            <RecordSpinImage>
                                
                            </RecordSpinImage>
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