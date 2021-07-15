import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/index';
import Signup from '../screens/Signup/index';


const Stack = createStackNavigator();

export default function Auth() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Login" children={Login} />
            <Stack.Screen name="Signup" children={Signup} />
        </Stack.Navigator>
    )
}