import React from 'react';
import { View } from 'react-native';
import Content from './content';
import styles from './styles';
import { useIsFocused } from '@react-navigation/native';

const Camera = () => {

    const isFocused = useIsFocused();

    return (
        <View style={styles.indexContainer}>
            { isFocused && <Content /> }
        </View>
    )
};

export default Camera;