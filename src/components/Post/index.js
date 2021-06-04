import React, { useState } from 'react';
import styles from './styles';
import { View, Text, TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
                        style={styles.video}
                        resizeMode={'cover'}
                        onError={(e: LoadError) => console.log(e)}
                        repeat={true}
                        paused={paused}
                    />


                    <View style={styles.uiContainer}>
                        <View style={styles.actionsContainer}>
                            <Text>Actions Component</Text>
                        </View>

                        <View style={styles.infoContainer}>
                            <Text style={styles.handle}>@handle</Text>
                            <Text style={styles.description}>Some meathead</Text>
                            <View style={styles.audioInfo}>
                                <Entypo name={'beamed-note'} size={24} color='white' />
                                {/* <FontAwesome name={'itunes-note'} size={24} color="white" /> */}
                                <Text style={styles.audio}>audio</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Post;