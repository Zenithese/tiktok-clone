import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/index';
import Profile from '../screens/Profile/index';
import Discover from '../screens/Discover/index';
import Inbox from '../screens/Inbox/index';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Camera from '../screens/Camera';
import plusIcon from '../assets/images/plus-icon.png';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                tabStyle: {
                    backgroundColor: 'black',
                    paddingBottom: 30,
                },
                activeTintColor: '#fff',
                style: {
                    height: 80
                }
            }}
        >
            <Tab.Screen
                name={'Home'}
                children={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name={'home'} size={25} color={color} />
                    ),
                    style: {
                        paddingBottom: 30
                    }
                }}
            />
            <Tab.Screen
                name={'Discover'}
                children={Discover}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name={'search1'} size={25} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Upload'}
                children={Camera}
                options={{
                    tabBarIcon: ({ }) => (
                        <Image
                            source={plusIcon}
                            style={{ height: 35, resizeMode: 'contain' }}
                        />
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen
                name={'Inbox'}
                children={Inbox}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name={'message-minus-outline'}
                            size={25}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={'Me'}
                children={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={'person-outline'} size={25} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavigation;