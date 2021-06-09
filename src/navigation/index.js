import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './bottomNavigation'

const Stack = createStackNavigator();

export default function Navigation() {

    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown: false}} >
                <Stack.Screen name="Home" children={BottomNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}