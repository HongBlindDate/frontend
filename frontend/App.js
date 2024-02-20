import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Intro from './screen/intro';
import MainScreen from "./screen/BottomNavigation";
import ProfileChange from './screen/proflie/profileChange';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}/>
          <Stack.Screen name='ProfileChange' component={ProfileChange} />
          {/* <Stack.Screen name = "Intro" component={Intro} />  */}
        </Stack.Navigator>
      </NavigationContainer>
    );
}