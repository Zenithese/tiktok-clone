import React, { useRef, createRef, useEffect, useState } from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity, Animated, Easing, Dimensions, findNodeHandle, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const tabs = [
    {
        key: 'tab1',
        body: <FontAwesome5 name={'grip-vertical'} size={15} color='black' />,
        ref: createRef(),
        color: 'red'
    },
    {
        key: 'tab2',
        body: <Feather name={'heart'} size={15} color='black' />,
        ref: createRef(),
        color: 'blue'
    },
    {
        key: 'tab3',
        body: <Feather name={'lock'} size={15} color='black' />,
        ref: createRef(),
        color: 'green'
    },
]

const Underline = ({ measurements, scrollX }) => {
    const inputRange = tabs.map((_, i) => i * width)
    const indicatorWidth = scrollX.interpolate({
        inputRange,
        outputRange: measurements.map((measurement) => measurement.width)
    })
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

const Tab = React.forwardRef(({ tab, flatListRef, index }, ref) => {

    const onPress = () => {
        flatListRef.current.scrollToIndex({ index: index })
    }

    return (
        <View ref={ref}>
            <TouchableOpacity  key={tab.key} onPress={onPress}>
                {tab.body}
            </TouchableOpacity>
        </View>
        
    )
})

const Tabs = ({ tabs, scrollX, flatListRef }) => {
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
                        <Tab tab={tab} ref={tab.ref} key={tab.key} flatListRef={flatListRef} index={index} />
                    )
                })
            }
            {measurements.length > 0 && <Underline measurements={measurements} scrollX={scrollX}/>}
        </View>
    )
}

const TabView = () => {
    const scrollX = useRef(new Animated.Value(0)).current 
    
    const flatListRef = useRef()

    return (
        <View>
            <Tabs tabs={tabs} scrollX={scrollX} flatListRef={flatListRef} />
            <Animated.FlatList
                ref={(ref) => flatListRef.current = ref}
                style={styles.animatedFlatlist}
                data={tabs}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => {
                    return (
                        <View style={{
                                width: width,
                                height: 200,
                                backgroundColor: item.color
                            }}
                        />
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
                    { useNativeDriver: false }
                )}
            />
        </View>
    )
}

export default TabView;

{/* <Animated.FlatList
    contentContainerStyle={{ width: Dimensions.get('window').width, justifyContent: 'space-around' }}
    style={styles.animatedFlatlist}
    data={tabs}
    keyExtractor={(tab) => tab.key}
    renderItem={(item) => {
        return (
            <Tab ref={item.ref} body={item.body} key={item.key} />
        )
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    pagingEnabled
    onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
    )}
    bounces={false}
>
</Animated.FlatList> */}

// const formatedTabs = tabs.map((tab, index) => {
//     switch (typeof tab) {
//         case 'object':
//             return (
//                 <TouchableOpacity key={index}>
//                     {tab}
//                 </TouchableOpacity>
//             )
//         case 'string':
//             return (
//                 <TouchableOpacity key={index}>
//                     <Text>{tab}</Text>
//                 </TouchableOpacity>
//             )
//         default:
//             return (
//                 <TouchableOpacity key={index}>
//                     <Text>N/A</Text>
//                 </TouchableOpacity>
//             )
//     }
// }
// )

// const formatedTabs = tabs.map((tab, index) => {
//     switch (typeof tab) {
//         case 'object':
//             return (
//                 <Tab ref={createRef} body={tab} key={index} />
//             )
//         case 'string':
//             return (
//                 <Tab ref={createRef} body={<Text>{tab}</Text>} key={index} />
//             )
//         default:
//             return (
//                 <Tab ref={createRef} body={<Text>N/A</Text>} key={index} />
//             )
//     }
// }
// )