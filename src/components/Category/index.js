import React, { useState } from 'react';
import { View, Text, Dimensions, TextInput, FlatList, ScrollView } from 'react-native';
import { data } from './data';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const Category = ({ name, posts }) => {

    const renderItem = ({ item, index }) => {
        if (index === 0) {
            return (
                <View
                    onPress={(event) => console.log(event.nativeEvent)}
                    style={[styles.item, { backgroundColor: 'red', marginLeft: 15 }]}
                >
                    <Text style={styles.itemText}>{item.id}</Text>
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
        <View
            style={{ zIndex: 0 }}
        >
            <View style={styles.categoryBanner}>
                <View style={styles.leftSide}>
                    <View style={styles.categoryImage}>
                        <Fontisto name={'hashtag'} size={15} color='black' />
                    </View>

                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{name}</Text>
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
                data={posts}
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