import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from '../screen/tab/matching/main';
import Chatting from '../screen/tab/chatting/chatting';
import ProfileStart from '../screen/tab/profile/profileStart';

import { AntDesign } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main" //mainpage
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
      <Tab.Screen name="Main" component={Main}/>
      <Tab.Screen name="Chatting" component={Chatting}/>
      <Tab.Screen name="Profile" component={ProfileStart}/>
    </Tab.Navigator>
  )
}

const TabBarIcon = (focused, name) => {
  let iconName, iconSize;

  if(name == 'Main')
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
