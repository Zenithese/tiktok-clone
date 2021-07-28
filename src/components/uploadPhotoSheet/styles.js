import { StyleSheet, Dimensions } from 'react-native';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        height: height,
        // backgroundColor: 'blue',
    },
    modalBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundColor: 'black',
        // opacity: 0.4
    },
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        height: 310,
        width: width,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: 'white',
    },
    profileImageAndUsernameContainer: {
        alignItems: 'center',
        paddingTop: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderColor: '#fff',
    },
    closeContainer: {
        position: 'absolute',
        right: 20
    },
    editIconContainer: {
        width: 30,
        height: 30,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        bottom: 30,
        left: 33,
        backgroundColor: 'white'
    }
});

export default styles;