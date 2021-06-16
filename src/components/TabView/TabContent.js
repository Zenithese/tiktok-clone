import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity } from 'react-native';

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
export default function TabContent({ viewableIndex, item, newScroll, viewableItems, data, backgroundColor, scrollY, topHeight }) {

    const flatListRef = useRef()

    useEffect(() => {
        console.log(viewableIndex)
        if (viewableItems 
            && viewableItems.viewableItems.some(viewable => viewable.key !== item.key)) {
                flatListRef.current.scrollToOffset({ offset: 0 })
        }
    }, [newScroll])

    const scrollable = scrollY.interpolate({
        inputRange: [0, topHeight, Math.ceil(data.length / 3) * 170],
        outputRange: [false, false, true],
    })

    const renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <TouchableOpacity
                onPress={(event) => console.log(event.nativeEvent)}
                style={[styles.item, { backgroundColor: backgroundColor }]}
            >
                <Text style={styles.itemText}>{item.key}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <Animated.FlatList
            ref={(ref) => flatListRef.current = ref}
            data={formatData(data, numColumns)}
            style={styles.container}
            renderItem={renderItem}
            numColumns={numColumns}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollEnabled={scrollable}
            scrollToOffset={0}
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