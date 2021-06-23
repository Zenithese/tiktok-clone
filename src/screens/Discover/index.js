import React, { useState } from 'react';
import { View, Text, Dimensions, TextInput, FlatList, ScrollView } from 'react-native';
import SearchComponent from '../../components/SearchComponent';
import Category from '../../components/Category/index'

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]
 
const Discover = () => {

    return (
        <View>
            <SearchComponent />
            {/* <FlatList
                style={{ width: width, height: height, backgroundColor: 'lightskyblue'}}
            >

            </FlatList> */}
            <Category />
        </View>
    )
}

export default Discover;