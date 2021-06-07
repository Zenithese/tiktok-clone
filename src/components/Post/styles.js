import { transform } from '@babel/core';
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
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    actionsContainer: {
        alignSelf: 'flex-end',
        marginRight: 10,
        justifyContent: 'space-between',
        height: 300
    },
    profileImageContainer: {
        alignItems: 'center'
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
    },
    likesContainer: {
        alignItems: 'center'
    },
    commentsContainer: {
        alignItems: 'center'
    },
    shareContainer: {
        alignItems: 'center'
    },
    count: {
        color: '#fff',
    },
    handle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 10,
    },
    audioInfo: {
        flexDirection: 'row'
    },
    audio: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 10,
    },
    audioImageContainer: {
        alignSelf: 'flex-end',
    },
    audioImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 12,
        borderColor: 'black',
    },
    recordSpinContainer: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
    }
});

export default styles;