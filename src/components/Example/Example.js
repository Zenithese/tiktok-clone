import React, { useState, createRef } from "react";
import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler';

const Example = () => {
    const ref = createRef();
    const scrollRef = createRef();
    
    const [enable, setEnable] = useState(true)
    
    const _onScrollDown = (event) => {
        if (!enable) return;
        const { translationY } = event.nativeEvent;
        // handle PanGesture event here
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
        <>
            <ScrollView
                ref={scrollRef}
                waitFor={enable ? ref : scrollRef}
                scrollEventThrottle={40}
                onScroll={_onScroll}
            >
                <PanGestureHandler
                    enabled={enable}
                    ref={ref}
                    activeOffsetY={5}
                    failOffsetY={-5}
                    onGestureEvent={_onScrollDown}
                />
            </ScrollView>
        </>
    )
}

export default Example;