import React, { useRef, useState } from 'react';
import styles from './styles';
import { View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';

const Content = () => {

    const camera = useRef();

    const [isRecording, setIsRecording] = useState(false);

    // const navigation = useNavigation();

    const onRecord = async () => {
        if (isRecording) {
            console.warn('stopping')
            camera.current.stopRecording();
        } else {
            // console.warn('starting')
            const options = { base64: true }
            console.log(camera)
            const data = await camera.current.recordAsync(options);
            console.warn(data)
            // navigation.navigate('CreatePost', { videoUri: data.uri });

        }
    };

    return (
        <View style={styles.container}>
            <RNCamera
                ref={camera}
                onRecordingStart={() => setIsRecording(true)}
                onRecordingEnd={() => setIsRecording(false)}
                style={styles.preview}
            />
            <TouchableOpacity
                onPressIn={onRecord}
                onPressOut={onRecord}
                style={
                    isRecording ? styles.stop : styles.record
                }
            />
        </View>
    );
};

export default Content;