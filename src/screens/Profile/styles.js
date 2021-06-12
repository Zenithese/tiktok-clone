import { StyleSheet, Dimensions } from 'react-native';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height - 79]

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    topHalfContainer: {
        height: (height / 2) - 53,
        width: width,
        alignItems: 'center',
        justifyContent: 'space-around',
        justifyContent: 'flex-start',
    },
    topHalf: {
        width: width,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    lowerHalf: {
        // position: 'absolute',
        // height: (height / 2) + 35,
        // width: width,
        // top: 0,
        // left: 0,
        // bottom: 0,
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
    },
    username: {
        fontWeight: '500',
        fontSize: 17,
        paddingTop: 17,
    },
    engagementContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
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
        justifyContent: 'space-around',
        width: Dimensions.get('window').width / 2,
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
        paddingBottom: 13,
    },
});

export default styles;