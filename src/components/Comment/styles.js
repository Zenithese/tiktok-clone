import { StyleSheet, Dimensions } from 'react-native';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const styles = StyleSheet.create({
    commentBanner: {
        justifyContent: 'flex-end',
        padding: 10,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    leftSide: {
        justifyContent: 'space-between',
        flexDirection: 'row',
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
    titleContainer: {

    },
    username: {
        color: 'darkgray',
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 5,
    },
    likesContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    likesCount: {
        color: 'gray',
        fontSize: 13,
        fontWeight: '300',
    },
});

export default styles;