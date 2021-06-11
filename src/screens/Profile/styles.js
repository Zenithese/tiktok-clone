import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height - 79,
        alignItems: 'center',
    },
    headerContainer: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },
    centerHeaderComponent: {
        flexDirection: 'row',
        marginTop: 4,
    },
    profileImageAndUsernameContainer: {
        alignItems: 'center'
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
        marginTop: 15,
    },
    username: {
        padding: 10,
        fontWeight: '500',
        fontSize: 17,
        marginTop: 5,
    },
    engagementContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        width: Dimensions.get('window').width / 1.4,
    },
    statContainer: {
        alignItems: 'center',
    },
    statCount: {
        fontWeight: '600',
        fontSize: 15,
    }, 
    statTitle: {
        color: 'gray',
    }, 
    statDivider: {
        height: 18,
        width: 1,
        backgroundColor: 'lightgray',
    },
    touchablesContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-around',
        width: Dimensions.get('window').width / 1.9,
    },
    editTouchable: {
        borderWidth: 2,
        borderColor: 'lightgray',
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    bookmarkTouchable: {
        borderWidth: 2,
        borderColor: 'lightgray',
        borderRadius: 4,
        paddingVertical: 8.5,
        paddingHorizontal: 10,
    },  
    bioContainer: {
        alignItems: 'center',
        margin: 20,
    },
});

export default styles;