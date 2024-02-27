import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStackNavigator from './navigation/MainStackNavigator';
import LoginStackNavigator from './navigation/LoginStackNavigator';
import { autoLoggedIn } from './utils/auth';
import { View, Text , ImageBackground} from 'react-native';





const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [autologgedIn, setAutoLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const autologgedInStatus = await autoLoggedIn();
      setAutoLoggedIn(autologgedInStatus);
      setTimeout(() => setLoading(false), 1500); //splash screen time 
    };

    checkLoginStatus();
  }, []);

  if (loading) { //loading is true -> splash screen
    return (
        <ImageBackground style={{ flex: 1, justifyContent: "center", alignItems: "center" }} source={require("./assets/splashScreen.png")}>
          <Text></Text> 
        </ImageBackground>
      
      
    );
  }

  return (
    <NavigationContainer>
      {autologgedIn ? <MainStackNavigator /> : <LoginStackNavigator />}
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
