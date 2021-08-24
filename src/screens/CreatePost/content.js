import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Keyboard } from 'react-native';
import styles from './styles';
import Video from 'react-native-video';
import { useRoute } from '@react-navigation/native';
import { connect } from 'react-redux';
import { createPost } from '../../actions/posts_actions';
import RNFS from 'react-native-fs';
import RNThumbnail from 'react-native-thumbnail';

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
        (async function () {
            const post = {
                description: description,
                user_id: userId,
                video_uri: "null",
            }

            RNFS.readFile(route.params.videoUri, 'base64')
                .then(res => {
                    post["base64"] = res
                    RNThumbnail.get(route.params.videoUri)
                        .then((result) => {
                            RNFS.readFile(result.path, 'base64')
                                .then(res => {
                                    post["thumbnail"] = res
                                    createPost(post)
                                })
                        })
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