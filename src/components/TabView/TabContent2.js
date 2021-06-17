import React, { useEffect, useRef, createRef, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { PanGestureHandler} from 'react-native-gesture-handler';

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
    const ref = createRef();

    const [enable, setEnable] = useState(true)
    const [allowScroll, setAllowScroll] = useState(true)

    const _onScrollDown = (event) => {
        console.log('down')
        if (!enable) return;
        const { translationY } = event.nativeEvent;
        // handle PanGesture event here
        console.log(translationY)
        if (translationY > 0) {
            setAllowScroll(false)
        } else {
            setAllowScroll(true)
        }
    };

    const _onScroll = ({ nativeEvent }) => {
        console.log(nativeEvent.contentOffset.y)
        if (nativeEvent.contentOffset.y <= 0 && !enable) {
            console.log('top')
            setEnable(true);
        }
        if (nativeEvent.contentOffset.y > 0 && enable) {
            setEnable(true);
        }
    };

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
        <>
            <PanGestureHandler
                enabled={enable}
                ref={ref}
                activeOffsetY={5}
                failOffsetY={-5}
                onGestureEvent={_onScrollDown}
            >
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
                    waitFor={true ? ref : flatListRef}
                    onScroll={_onScroll}
                >
                </Animated.FlatList>
            </PanGestureHandler>
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