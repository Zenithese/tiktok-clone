import { StyleSheet, Dimensions } from 'react-native';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const styles = StyleSheet.create({
    container: {

    },
    commentContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
    },
    commentBanner: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    center: {
        width: width * .70,
    },
    profileImageContainer: {
        width: width * .15,
        alignItems: 'center',
    },
    profileImage: {
        width: 34,
        height: 34,
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
    viewReply: {
        color: 'gray',
        marginVertical: 5,
    },
});

export default styles;