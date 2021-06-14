import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Animated } from 'react-native';

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};

const numColumns = 3;
export default function TabContent({ data }) {

    const renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <View
                style={styles.item}
            >
                <Text style={styles.itemText}>{item.key}</Text>
            </View>
        );
    };

    return (
        <Animated.FlatList
            data={formatData(data, numColumns)}
            style={styles.container}
            renderItem={renderItem}
            numColumns={numColumns}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
    },
    item: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: .5,
        height: 170,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemText: {
        color: '#fff',
    },
});