import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './bottomNavigation';
import CreatePost from '../screens/CreatePost/index';

const Stack = createStackNavigator();

export default function App() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" children={BottomNavigation} />
            <Stack.Screen name="CreatePost" children={CreatePost} />
        </Stack.Navigator>
    )
}