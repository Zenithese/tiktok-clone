import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, TextInput, FlatList, SafeAreaView, Animated } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import Category from '../Category/index';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const SearchComponent = () => {

    const [query, setQuery] = useState('')
    const [data, setData] = useState(new Array(5).fill(0).map(_ => new Object))

    const scrollY = useRef(new Animated.Value(0)).current
    const contentHeight = useRef(new Animated.Value(0)).current

    const translateY = scrollY.interpolate({
        inputRange: [0, 1000],
        outputRange: [0, 1000],
        extrapolate: 'clamp'
    })

    const handleQuery = (q) => {
        setQuery(q)
    };

    return (
        <View>
            <Animated.FlatList
                ListHeaderComponentStyle={{ zIndex: 10 }}
                ListHeaderComponent={
                    <Animated.View
                        style={{
                            transform: [{
                                translateY: translateY
                            }],
                        }}
                    >
                        <SearchBar
                            inputContainerStyle={{ borderRadius: 2, height: 20, marginVertical: 3 }}
                            platform="ios"
                            placeholder="Search"
                            onChangeText={handleQuery}
                            value={query}
                        />
                    </Animated.View>
                }
                style={{ width: width }}
                data={data}
                renderItem={({ item }) => <Category />}
                // keyExtractor={(item) => item.key}
                showsVerticalScrollIndicator={false}
                bounces={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY }, contentSize: { height: contentHeight } } }],
                    { useNativeDriver: true }
                )}
                onEndReached={() => {
                    console.log('reached')
                    setData(new Array(10).fill(0).map(_ => new Object))
                }}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}

export default SearchComponent;