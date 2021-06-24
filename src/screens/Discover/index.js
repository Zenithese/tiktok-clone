import React, { useState } from 'react';
import { View, Text, Dimensions, TextInput, FlatList, ScrollView, SafeAreaView } from 'react-native';
import SearchComponent from '../../components/SearchComponent';
import Category from '../../components/Category/index'

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const data = new Array(20).fill(0).map(_ => new Object)
 
const Discover = () => {

    return (
        <View>
            <SearchComponent />
            {/* <FlatList
                style={{ width: width, height: height, backgroundColor: 'lightskyblue'}}
            >

            </FlatList> */}
            <SafeAreaView>
                <FlatList
                    style={{ width: width }}
                    data={data}
                    renderItem={({ item }) => <Category />}
                    // keyExtractor={(item) => item.key}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                />
            </SafeAreaView>
        </View>
    )
}

export default Discover;