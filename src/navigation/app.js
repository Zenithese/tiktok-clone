import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './bottomNavigation';

const Stack = createStackNavigator();

export default function App() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" children={BottomNavigation} />
        </Stack.Navigator>
    )
}