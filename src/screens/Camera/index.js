import React, { useRef, useState } from 'react';
import styles from './styles';
import { View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';

const Camera = () => {

    const camera = useRef();
    
    const [isRecording, setIsRecording] = useState(false);

    const navigation = useNavigation();

    const onRecord = async () => {
        if (isRecording) {
            camera.current.stopRecording();
        } else {
            const options = { base64: true }
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

export default Camera;