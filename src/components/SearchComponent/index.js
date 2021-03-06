import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Dimensions, TextInput, FlatList, SafeAreaView, Animated, ActivityIndicator } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
// import styles from '../../screens/Inbox/styles';
import Category from '../Category/index';
import styles from './styles';
import { connect } from 'react-redux';
import { fetchHashtags } from '../../actions/hashtags_actions';

const mapStateToProps = ({ entities }) => {
    return {
        hashtags: Object.entries(entities.hashtags)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchHashtags: () => dispatch(fetchHashtags()),
    };
};

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const SearchComponent = ({ fetchHashtags, hashtags }) => {

    useEffect(() => {
        fetchHashtags()
    }, [])

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
        <View style={styles.container}>
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
                data={hashtags}
                renderItem={({ item }) => <Category name={item[0]} posts={item[1].posts} key={item[1].id} />}
                // keyExtractor={(item) => item.key}
                showsVerticalScrollIndicator={false}
                bounces={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY }, contentSize: { height: contentHeight } } }],
                    { useNativeDriver: true }
                )}
                onEndReached={() => {
                    // console.log('reached')
                    // const newData = [...data, ...new Array(5).fill(0).map(_ => new Object) ]
                    // setData(newData)
                }}
                onEndReachedThreshold={0.5}
                ListFooterComponent={
                    <View>
                        <ActivityIndicator />
                    </View>
                }
            />
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);