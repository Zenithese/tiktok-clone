import React, { useRef } from 'react';
import styles from './styles';
import { Animated, View, Text, TextInput } from 'react-native';
import Comment from '../Comment/index';
import Fontisto from 'react-native-vector-icons/Fontisto';


const data = new Array(20).fill(0).map(_ => new Object)

const BottomSheet = () => {

    const scrollY = useRef(new Animated.Value(0)).current
    const contentHeight = useRef(new Animated.Value(0)).current

    const translateY = scrollY.interpolate({
        inputRange: [0, 1000],
        outputRange: [0, 1000],
        extrapolate: 'clamp'
    })

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Animated.FlatList
                    style={styles.bottomSheet}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY }, contentSize: { height: contentHeight } } }],
                        { useNativeDriver: true }
                    )}
                    scrollEnabled={true}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponentStyle={{ zIndex: 1 }}
                    ListHeaderComponent={
                        <Animated.View
                            style={
                                [
                                    styles.header,
                                    {
                                        transform: [{
                                            translateY: translateY
                                        }]
                                    }
                                ]
                            }
                        >
                            <View>
                                <Text>Comments</Text>
                            </View>
                            <View style={styles.closeContainer}>
                                <Fontisto name={'close-a'} size={13} color='black' />
                            </View>
                        </Animated.View>
                    }
                    data={data}
                    renderItem={({ item }) => <Comment />}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder={'Add comment...'}
                />
            </View>
        </View>
    )
}

export default BottomSheet;