import React, { useEffect, useRef, createRef, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

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
export default function TabContent({ profileRef, item, newScroll, viewableItems, data, backgroundColor, scrollY, topHeight }) {

    const flatListRef = useRef()
    const ref = createRef();

    const gestureY = useRef(new Animated.Value(0)).current
    const Y = useRef(new Animated.Value(0)).current

    const [enable, setEnable] = useState(true)

    const handleGesture = (event) => {
        const { translationY } = event.nativeEvent;
        console.log(profileRef.current)
        if (translationY > 0) {
            profileRef.current.scrollTo({ y: Math.max(0, topHeight - translationY) })
        }
    };

    const translateY = scrollY.interpolate({
        inputRange: [topHeight, Math.ceil(data.length / 3) * 170],
        outputRange: [0, -(Math.ceil(data.length / 3) * 170 - topHeight)],
        extrapolate: 'clamp'
    })

    useEffect(() => {
        if (viewableItems
            && viewableItems.viewableItems.some(viewable => viewable.key !== item.key)) {
            flatListRef.current.scrollToOffset({ offset: 0 })
        }
    }, [newScroll])

    const scrollable = scrollY.interpolate({
        inputRange: [0, topHeight, Math.ceil(data.length / 3) * 170],
        outputRange: [false, false, true],
    })

    // const scrollable2 = Animated.diffClamp(Y, 0, 100).interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [false, true],
    // })

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

    const handleScroll = ({ nativeEvent }) => {
        // console.log(nativeEvent)
        if (nativeEvent.contentOffset.y <= 0) {
            profileRef.current.scrollTo({ y: topHeight - 0.1 })
        }
    };

    return (
        <>
            {/* <PanGestureHandler
                enabled={true}
                ref={ref}
                activeOffsetY={5}
                failOffsetY={-5}
                onGestureEvent={handleGesture}
                // onGestureEvent={Animated.event(
                //     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                //     { useNativeDriver: false }
                // )}
            > */}
                <Animated.FlatList
                    ref={(ref) => flatListRef.current = ref}
                    data={formatData(data, numColumns)}
                    style={[styles.container, {
                        // transform: [{translateY: translateY}]
                    }]}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={scrollable}
                    // scrollToOffset={0}
                    // waitFor={true ? ref : flatListRef}
                    // onScroll={handleScroll}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                >
                </Animated.FlatList>
            {/* </PanGestureHandler> */}
        </>
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