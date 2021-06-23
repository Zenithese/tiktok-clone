import React, { useState } from 'react';
import { View, Text, Dimensions, TextInput, FlatList, SafeAreaView } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const SearchComponent = () => {

    const [query, setQuery] = useState('')

    const handleQuery = (q) => {
        setQuery(q)
    };

    return (
        <SafeAreaView>
            <SearchBar
                platform="ios"
                placeholder="Type Here..."
                onChangeText={handleQuery}
                value={query}
            />
            <Text>Discover</Text>
        </SafeAreaView>
    )
}

export default SearchComponent;