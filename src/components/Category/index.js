import React, { useState } from 'react';
import { View, Text, Dimensions, TextInput, FlatList, ScrollView } from 'react-native';
import { data } from './data';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const Category = () => {

    const renderItem = ({ item, index }) => {
        if (index === 0) {
            return (
                <View
                    onPress={(event) => console.log(event.nativeEvent)}
                    style={[styles.item, { backgroundColor: 'red', marginLeft: 15 }]}
                >
                    <Text style={styles.itemText}>{item.key}</Text>
                </View>
            );
        }
        return (
            <View
                onPress={(event) => console.log(event.nativeEvent)}
                style={[styles.item, { backgroundColor: 'red' }]}
            >
                <Text style={styles.itemText}>{item.key}</Text>
            </View>
        );
    };

    return (
        <View>
            <View style={styles.categoryBanner}>
                <View style={styles.leftSide}>
                    <View style={styles.categoryImage}>
                        <Fontisto name={'hashtag'} size={15} color='black' />
                    </View>

                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Hashtag Title</Text>
                        <Text style={styles.trendingType}>Trending Hashtag</Text>
                    </View>
                </View>

                <View style={styles.trendingCountContainer}>
                    <Text style={styles.trendingCount}>1352.5 M</Text>
                </View>
            </View>
            
            <FlatList
                style={styles.flatListStyle}
                horizontal
                data={data}
                renderItem={renderItem}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
            />
        </View>
    )
}

export default Category;