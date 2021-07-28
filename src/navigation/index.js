import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import configureStore from '../store/store';
import BottomSheets from './bottomSheets';
import Greeting from './greeting';

const { store, persistor } = configureStore();

export default function Navigation() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Greeting />
                </NavigationContainer>
                <BottomSheets />
            </PersistGate>
        </Provider> 
    )
}