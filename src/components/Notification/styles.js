import { StyleSheet, Dimensions } from 'react-native';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const styles = StyleSheet.create({
    notificationContainer: {
        justifyContent: 'flex-end',
        padding: 10,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    leftSide: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: width / 2.7
    },
    actorImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    actorImage: {
        width: 42,
        height: 42,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
    },
    actorNameAndActionContainer: {

    },
    actorName: {
        fontWeight: '400'
    },
    action: {
        color: 'gray',
        fontWeight: '300'
    },
    responseContainer: {
        
    },
    response: {
        borderColor: 'lightgray',
        borderWidth: 2,
        borderRadius: 2,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
});

export default styles;