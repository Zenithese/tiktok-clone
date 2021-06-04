import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    container: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    infoContainer: {
        justifyContent: 'flex-end',
    },
    actionsContainer: {
        justifyContent: 'flex-end',
    },
    handle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    infoContainer: {

    },
    description: {

    },
    audioInfo: {

    },
    audio: {

    },
});

export default styles;