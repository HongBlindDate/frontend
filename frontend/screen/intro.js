import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Intro({navigation}) {
    return (
        <View>
          <Text>Go Start the app</Text>
          <Button
            title="Start"
            onPress={() => {navigation.navigate('MainScreen')}}
          />
        </View>
    );
}