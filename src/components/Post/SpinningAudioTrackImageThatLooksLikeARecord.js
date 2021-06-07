import React, { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import styles from './styles';

const SpinningAudioTrackImageThatLooksLikeARecord = ({ uri }) => {
    const spinAnim = useRef(new Animated.Value(0)).current

    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    useEffect(() => {
        Animated.loop(
            Animated.timing(
                spinAnim,
                {
                    toValue: 1,
                    duration: 5000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }
            )
        ).start();
    }, [spinAnim])

    return (
        <Animated.Image
            style={[styles.audioImage, {
                transform: [{ rotate: spin }],
            }]}
            source={{ uri: uri }}
        >
        </Animated.Image>
    );
}

export default SpinningAudioTrackImageThatLooksLikeARecord;