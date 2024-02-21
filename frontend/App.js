import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNavigator from './navigation/StackNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <StackNavigator/>
        <StatusBar style="dark" /> 
      </NavigationContainer>
    );
}