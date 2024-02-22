import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNavigator from './navigation/StackNavigator';

import HomeScreen from './screen/tab/home';
import Intro from './screen/intro';
import ChattingScreen from './screen/tab/chatting';
import ProfileScreen from './screen/tab/profile';
import { AntDesign } from '@expo/vector-icons';

import MainScreen from "./screen/MainScreen";

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [autologgedIn, setAutoLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const autologgedInStatus = await autoLoggedIn();
      setAutoLoggedIn(autologgedInStatus);
      setLoading(false);
    };

    checkLoginStatus();
  }, []);

  if (loading) {
    return null; // Don't show anything when loading
  }
    return (
      <NavigationContainer>
        <StackNavigator/>
        <StatusBar style="dark" /> 
      </NavigationContainer>
    );
}


// {autologgedIn ? null : (
//   <>
//     <Stack.Screen name = "Start" component={Start} options={{ headerShown: false }}/>
//     <Stack.Screen name = "LoginForm" component={LoginForm} options={{ headerShown: false }}/>
//     <Stack.Screen name = "TermsOfUse" component={TermsOfUse} options={{ title: false }}/>
//     <Stack.Screen name = "Join" component={Join} options={{ title: "회원가입" }}/>
//     <Stack.Screen name = "FindID" component={FindID} />
//     <Stack.Screen name = "FindPW" component={FindPW} />
//   </>
// )}
// <Stack.Screen name = "MainScreen" component={MainScreen} options={{ headerShown: false }}/>