import { StyleSheet, Dimensions } from 'react-native';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const styles = StyleSheet.create({
    container: {
        width: width * .9,
        alignSelf: 'center',
        marginTop: height * .1
    },
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: height / 15,
        backgroundColor: 'lightgray',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    switchFormContainer: {
        marginTop: 10,
        width: '100%',
        height: height / 15,
        // backgroundColor: 'lightgray',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    switchForm: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'blue',
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;