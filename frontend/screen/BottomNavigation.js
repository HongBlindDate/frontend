import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './tab/home';
import Intro from './intro';
import ChattingScreen from './tab/chatting';
import ProfileScreen from './proflie/profile';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home" //mainpage
      screenOptions={({route}) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({focused}) => (
          TabBarIcon(focused, route.name)
        ),
        tabBarStyle: [
          {
            display: "flex",
          },
          null
        ]}
      )}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Chatting" component={ChattingScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

const TabBarIcon = (focused, name) => {
  let iconName, iconSize;

  if(name == 'Home')
    iconName = 'home'
  else if (name == 'Chatting')
    iconName = 'message1'
  else if (name == 'Profile')
    iconName = 'setting'

    iconSize = focused ? 30 : 20
    return (
      <AntDesign
      name={iconName}
      size={iconSize}
      color="black" />
    )
}

export default BottomNavigation;
