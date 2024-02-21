import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { autoLoggedIn } from './utils/auth.js'; //Function to check whether the user is auto logged in or not 

import Start from './screen/login/start';
import TermsOfUse from './screen/login/termsOfUse';
import Join from './screen/login/join';
import FindID from './screen/login/findID';
import FindPW from './screen/login/findPW.js';
import LoginForm from './screen/login/loginForm';
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
      <Stack.Navigator>
        {autologgedIn ? null : (
          <>
            <Stack.Screen name = "Start" component={Start} options={{ headerShown: false }}/>
            <Stack.Screen name = "LoginForm" component={LoginForm} options={{ headerShown: false }}/>
            <Stack.Screen name = "TermsOfUse" component={TermsOfUse} options={{ title: false }}/>
            <Stack.Screen name = "Join" component={Join} options={{ title: "회원가입" }}/>
            <Stack.Screen name = "FindID" component={FindID} />
            <Stack.Screen name = "FindPW" component={FindPW} />
          </>
        )}
        <Stack.Screen name = "MainScreen" component={MainScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}