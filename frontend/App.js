import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigator from './navigation/StackNavigator';
import { autoLoggedIn } from './utils/auth';


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
        
        { autologgedIn ? null : (
          <>
          <StackNavigator/>
          <StatusBar style="dark" /> 
          </>
          
      )}
        
      </NavigationContainer>
      
    );
}
