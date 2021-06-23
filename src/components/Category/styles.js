import { StyleSheet, Dimensions } from 'react-native';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const styles = StyleSheet.create({
    container: {
        width: width,
    },
    item: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: 140,
        width: 100
    },
    itemText: {
        color: '#fff',
    },
    categoryImageContainer: {
        alignItems: 'center'
    },
    categoryImage: {
        width: 38,
        height: 38,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryBanner: {
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
    titleContainer: {

    },
    title: {
        fontSize: 15
    },
    trendingType: {
        color: 'gray',
        fontSize: 12,
        paddingTop: 3
    },
    trendingCountContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    trendingCount: {
        backgroundColor: '#d9ddde'
    },
    flatListStyle: { 
        width: width, 
    }
});

export default styles;