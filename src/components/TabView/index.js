import React, { useRef, createRef, useEffect, useState } from 'react';
import styles from './styles';
import { View, TouchableOpacity, TouchableWithoutFeedback, Animated, Easing, Dimensions, findNodeHandle, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TabContent from './TabContent';
import TabContent2 from './TabContent2';
import TabContent3 from './TabContent3';
import { data } from './data';
import { PanGestureHandler } from 'react-native-gesture-handler';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const tabs = [
    {
        key: 'tab1',
        body: <FontAwesome5 name={'grip-vertical'} size={15} color='black' />,
        ref: createRef(),
        color: 'red',
        index: 0
    },
    {
        key: 'tab2',
        body: <Feather name={'heart'} size={15} color='black' />,
        ref: createRef(),
        color: 'blue',
        index: 1
    },
    {
        key: 'tab3',
        body: <Feather name={'lock'} size={15} color='black' />,
        ref: createRef(),
        color: 'green',
        index: 2
    },
]

const inputRange = tabs.map((_, i) => i * width)

const Underline = ({ measurements, scrollX }) => {
    
    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measurements.map((measurement) => measurement.x - 15 + (measurement.width / 2))
    })
    return (
        <Animated.View
            style={{
                position: 'absolute',
                height: 2,
                width: 30,
                left: 0,
                backgroundColor: 'black',
                bottom: -1,
                transform: [{
                    translateX
                }]
            }}
        />
    )
}

const Tab = React.forwardRef(({ setNewScroll, setViewableIndex, tab, flatListRef, index }, ref) => {

    const onPress = () => {
        flatListRef.current.scrollToIndex({ index: index })
        setViewableIndex(index)
        setNewScroll(newScroll => !newScroll)
    }

    return (
        <View ref={ref}>
            <TouchableOpacity  key={tab.key} onPress={onPress}>
                {tab.body}
            </TouchableOpacity>
        </View>
        
    )
})

const Tabs = ({ setNewScroll, setViewableIndex, tabs, scrollX, flatListRef }) => {
    const containerRef = useRef()
    const [measurements, setMeasurements] = useState([])

    useEffect(() => {
        if (!(measurements.length && measurements[measurements.length - 1].x > 0)) {
            let m = [];
            tabs.forEach(tab => {
                if (tab.ref.current) {
                    tab.ref.current.measureLayout(
                        containerRef.current,
                        (x, y, width, height) => {
                            m.push({
                                x,
                                y,
                                width,
                                height,
                            })

                            if (m.length === tabs.length) {
                                setMeasurements(m);
                            }
                        },
                    )
                }
            })
        }
    })

    return (
        <View ref={containerRef} style={styles.container}>
            {
                tabs.map((tab, index) => {
                    return (
                        <Tab setNewScroll={setNewScroll} setViewableIndex={setViewableIndex} tab={tab} ref={tab.ref} key={tab.key} flatListRef={flatListRef} index={index} />
                    )
                })
            }
            {measurements.length > 0 && <Underline measurements={measurements} scrollX={scrollX}/>}
        </View>
    )
}

const TabView = ({ scrollY, topHeight, profileRef, posRef }) => {
    const scrollX = useRef(new Animated.Value(0)).current 

    const [newScroll, setNewScroll] = useState(false)
    const [viewableItems, setViewableItems] = useState(null)
    const [viewableIndex, setViewableIndex] = useState(0)
    const [momentum, setMomentum] = useState(false)
    const onViewRef = React.useRef((viewableItems) => {
        setViewableItems(viewableItems)
    })
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 15 })
    
    const flatListRef = useRef()

    const translateY = scrollY.interpolate({
        inputRange: [topHeight, Math.ceil(data.length / 3) * 170],
        outputRange: [0, Math.ceil(data.length / 3) * 170 - topHeight],
        extrapolate: 'clamp'
    })

    return (
        <View>
            <Animated.View
                style={{
                    zIndex: 10,
                    transform: [{
                        translateY: translateY
                    }],
                }}
            >
                <Tabs setNewScroll={setNewScroll} setViewableIndex={setViewableIndex} tabs={tabs} scrollX={scrollX} flatListRef={flatListRef} />
            </Animated.View>
            <Animated.FlatList
                ref={(ref) => flatListRef.current = ref}
                style={styles.animatedFlatlist}
                data={tabs}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => {
                    return (
                        <TabContent setMomentum={setMomentum} momentum={momentum} translateY={translateY} posRef={posRef} profileRef={profileRef} viewableIndex={viewableIndex} item={item} newScroll={newScroll} viewableItems={viewableItems} inputRange={inputRange} scrollX={scrollX} data={data} backgroundColor={item.color} scrollY={scrollY} topHeight={topHeight} />
                    )
                }}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                showsVerticalScrollIndicator={false}
                snapToInterval={width}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                bounces={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true, 
                    listener: () => {
                        setMomentum(true)
                    } }
                )}
                removeClippedSubviews={true}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
                onScrollEndDrag={() => { if (momentum) setNewScroll(!newScroll) }}
                onMomentumScrollEnd={() => setMomentum(false)}

            />
        </View>
    )
}

export default TabView;