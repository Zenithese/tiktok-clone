import React, { useState, createRef } from "react";
import { Dimensions, View } from "react-native";
import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from "react-native-safe-area-context";

const Example = () => {
    const ref = createRef();
    const scrollRef = createRef();

    const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

    const [enable, setEnable] = useState(true)
    
    const _onScrollDown = (event) => {
        if (!enable) return;
        const { translationY } = event.nativeEvent;
        // handle PanGesture event here
        console.log(translationY)
    };

    const _onScroll = ({ nativeEvent }) => {
        if (nativeEvent.contentOffset.y <= 0 && !enable) {
            setEnable(true);
        }
        if (nativeEvent.contentOffset.y > 0 && enable) {
            setEnable(true);
        }
    };

    return (
        <PanGestureHandler
            enabled={enable}
            ref={ref}
            activeOffsetY={5}
            failOffsetY={-5}
            onGestureEvent={_onScrollDown}
        >
            <ScrollView
                ref={scrollRef}
                waitFor={enable ? ref : scrollRef}
                scrollEventThrottle={40}
                onScroll={_onScroll}
            >
                <View style={{ backgroundColor: 'blue', width: width, height: height }}></View>
                <View style={{backgroundColor: 'red', width: width, height: height}}></View>
            </ScrollView>
        </PanGestureHandler>
    )
}

export default Example;