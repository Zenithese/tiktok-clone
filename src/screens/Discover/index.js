import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, TextInput, FlatList, ScrollView, SafeAreaView, Animated } from 'react-native';
import SearchComponent from '../../components/SearchComponent';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]
 
const Discover = () => {

    return (
        <SafeAreaView>
            <SearchComponent />
        </SafeAreaView>
    )
}

export default Discover;