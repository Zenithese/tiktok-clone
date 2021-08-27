import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

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
export default function TabContent({ setMomentum, momentum, translateY, viewableIndex, posRef, profileRef, item, newScroll, viewableItems, data, backgroundColor, scrollY, topHeight }) {

    const flatListRef = useRef()

    const [interupt, setInterupt] = useState(false)

    useEffect(() => {
        // console.log(viewableItems)
        if (posRef.current > topHeight) {
            profileRef.current.scrollTo({ animated: false, y: topHeight })
            setInterupt(false)
            console.log(viewableItems)
        }
    }, [newScroll])

    const renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <TouchableOpacity
                onPressIn={() => {
                    setInterupt(true)
                }}
                onPress={(event) => {
                    console.log(event.nativeEvent)
                }}
                style={[styles.item, { backgroundColor: backgroundColor }]}
            >
                <Text style={styles.itemText}>{item.key}</Text>
            </TouchableOpacity>
        );
    };

    const canTranslate = viewableItems
        && viewableItems.viewableItems
            .some(viewable => viewable.key !== item.key)

    return (
        <TouchableWithoutFeedback
            // onPressIn={() => {
            //     setInterupt(true)
            // }}
        >
            <View>
                <Animated.FlatList
                    ref={(ref) => flatListRef.current = ref}
                    data={formatData(data, numColumns)}
                    style={[styles.container, {
                        transform: [{
                            translateY:
                                !interupt && canTranslate ? translateY : 0
                        }]
                    }]}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    scrollToOffset={16}
                    onScrollBeginDrag={(event) => console.log(event.nativeEvent)}
                />
            </View>
        </TouchableWithoutFeedback>
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

    // useEffect(() => {
    //     if (viewableItems 
    //         && viewableItems.viewableItems.some(viewable => viewable.key !== item.key)) {
    //             // flatListRef.current.scrollToOffset({ offset: 0 })
    //             // profileRef.current.scrollTo({ animated: false, y: topHeight })
    //             if (posRef.current > topHeight) profileRef.current.scrollTo({ animated: false, y: topHeight })
    //     }
    // }, [newScroll])

    // const scrollable = scrollY.interpolate({
    //     inputRange: [0, topHeight, Math.ceil(data.length / 3) * 170],
    //     outputRange: [false, false, true],
    // })