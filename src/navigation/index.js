import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import configureStore from '../store/store';
import BottomSheet from '../components/bottomSheet';
import App from './app';
import Auth from './auth';

let store = configureStore();

window.getState = store.getState;
window.dispatch = store.dispatch;
window.getProps = store.getProps;

export default function Navigation() {

    return (
        <Provider store={store}>
            <NavigationContainer>
                {false ? <App /> : <Auth />}
            </NavigationContainer>
            <BottomSheet />
        </Provider> 
    )
}