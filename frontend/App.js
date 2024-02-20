import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screen/tab/home';
import ChattingScreen from './screen/tab/chatting';
import ProfileScreen from './screen/tab/profile';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Intro"
      tabBarOptions={{
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]}}
      screenOptions={({route}) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({focused}) => (
          TabBarIcon(focused, route.name)
        )
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Chatting" component={ChattingScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  )
}
Intro = () => {
  return (
    <Tab.Navigator
      initialRouteName="Intro"
      tabBarOptions={{
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]}}
      screenOptions={({route}) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({focused}) => (
          TabBarIcon(focused, route.name)
        )
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Chatting" component={ChattingScreen}/>
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

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Main" component={MainScreen} />
          <Stack.Screen name = "Home-Stack" component={Intro} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}