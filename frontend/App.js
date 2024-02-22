import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStackNavigator from './navigation/MainStackNavigator';
import LoginStackNavigator from './navigation/LoginStackNavigator';
import { autoLoggedIn } from './utils/auth';


const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [autologgedIn, setAutoLoggedIn] = useState(false);

  useEffect(() => { //check login status
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
        { autologgedIn ? <MainStackNavigator/> : 
          <LoginStackNavigator/>}
          <StatusBar style="dark" />
      </NavigationContainer>
      
    );
}
