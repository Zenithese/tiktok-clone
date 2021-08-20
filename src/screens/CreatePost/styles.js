import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height - 79]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: 'blue'
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'red'
    },
    textInput: {
        margin: 10,
        backgroundColor: 'black',
        height: 200,
        textAlignVertical: 'top'
    },
    button: {
        backgroundColor: '#ff4747',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        height: 50,
        marginBottom: 50
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default styles;