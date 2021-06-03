import React from 'react';
import styles from './styles'
import { View, Text, TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';

const Post = ({post}) => {
    return (
        <View style={styles.container}>
            <Video 
                source={{
                    uri: post.videoUri,
                }}
                style={styles.video}
                resizeMode={'cover'}
                onError={(e: LoadError) => console.log(e)}
                repeat={true}
            />
        </View>
    )
}

export default Post;