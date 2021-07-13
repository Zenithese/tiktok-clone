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
    },
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        height: 390,
        width: width,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: 'white',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        zIndex: 1,
        width: '100%',
        height: 30,
        flexDirection: 'row',
    },
    closeContainer: {
        position: 'absolute', 
        right: 20
    },
    comment: {

    },
    inputContainer: {
        backgroundColor: 'white',
    },
    input: {
        height: 40,
        margin: 12,
        borderRadius: 5,
        backgroundColor: 'lightgray',
        fontSize: 16,
        paddingLeft: 5,
    },
});

export default styles;