import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './bottomNavigation';
import configureStore from '../store/store';

const Stack = createStackNavigator();

let store = configureStore();

window.getState = store.getState;
window.dispatch = store.dispatch;
window.getProps = store.getProps;

export default function Navigation() {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}} >
                    <Stack.Screen name="Home" children={BottomNavigation} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider> 
    )
}