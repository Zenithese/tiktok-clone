import { StyleSheet, Dimensions } from 'react-native';

const width = (Dimensions.get('window').width)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 10,
        alignSelf: 'flex-end'
    },
    commentBanner: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    center: {
        width: width * .62,
    },
    profileImageContainer: {
        width: width * .08,
    },
    profileImage: {
        width: 20,
        height: 20,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    usernameContainer: {

    },
    username: {
        color: 'darkgray',
        fontSize: 14,
        fontWeight: 'bold',
    },
    likesContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width * .15,
    },
    likesCount: {
        color: 'gray',
        fontSize: 13,
        fontWeight: '300',
    },
    commentContainer: {
        alignSelf: 'flex-start'
    },
    comment: {
        fontSize: 17,
        fontWeight: '300',
        marginTop: 7,
    },
    reply: {
        color: 'gray',
        marginTop: 5,
    },
});

export default styles;