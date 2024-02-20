import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screen/tab/home';
import Intro from './screen/intro';
import ChattingScreen from './screen/tab/chatting';
import ProfileScreen from './screen/tab/profile';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Intro" component={Intro} />
          <Stack.Screen name = "Main"
          component={MainScreen}
          options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}