import React from 'react';
import styles from './styles';
import { SafeAreaView, FlatList, Dimensions } from 'react-native';
import Notification from '../../components/Notification';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const data = (new Array(5).fill(0).map(_ => new Object))

const Indox = () => {

    return (
        <SafeAreaView>
            <FlatList
                style={{ width: width }}
                data={data}
                renderItem={({ item }) => <Notification />}
                // keyExtractor={(item) => item.key}
                showsVerticalScrollIndicator={false}
                bounces={false}
            />
        </SafeAreaView>
    )
}

export default Indox;