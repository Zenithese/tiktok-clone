import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Keyboard } from 'react-native';
import styles from './styles';
import Video from 'react-native-video';
import { useRoute, useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { createPost } from '../../actions/posts_actions';
import RNFS from 'react-native-fs';

const mapStateToProps = ({ session: { auth } }) => {
    return {
        userId: auth.id,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: (post) => dispatch(createPost(post)),
    }
}

const Content = ({ createPost, userId }) => {

    const [description, setDescription] = useState('');

    const route = useRoute();

    const onPublish = () => {
        // const formData = new FormData();
        // formData.append('video', route.params.videoUri);
        (async function () {
            // const response = await fetch(route.params.videoUri);
            // const blob = await response.blob();
            // const post = {
            //     blob,
            //     description: 'new post',
            //     user_id: userId,
            //     video_uri: "null"
            // }
            // console.warn(response.readFile("base64"))
            // createPost(post)

            RNFS.readFile(route.params.videoUri, 'base64')
                .then(res => {
                    const post = {
                        base64: res,
                        description: 'new post',
                        user_id: userId,
                        video_uri: "null"
                    }
                    createPost(post)
                });
        })()
    }

    return (
        <SafeAreaView style={styles.container}>
            <Video
                source={{
                    uri: route.params.videoUri,
                }}
                style={styles.video}
                resizeMode={'cover'}
                // onError={(e: LoadError) => console.log(e)}
                repeat={true}
                paused={false}
            />
            <KeyboardAvoidingView behavior={'position'}>
                <TextInput
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                    numberOfLines={5}
                    placeholder={'Description'}
                    style={styles.textInput}
                />
                <TouchableOpacity onPress={onPublish}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Publish</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);