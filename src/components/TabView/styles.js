import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: 30,
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
    },
    tabsContainer: {
        width: Dimensions.get('window').width,
        height: 30,
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    underline: {
        position: 'absolute',
        height: 2,
        width: 30,
        backgroundColor: 'black',
    },
    animatedFlatlist: {
        width: Dimensions.get('window').width,
    },
    section: {
        width: Dimensions.get('window').width,
        height: 100,
    }
});

export default styles;