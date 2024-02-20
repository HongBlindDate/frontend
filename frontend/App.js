import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LoginForm from './login/loginForm.js';
import Join from './login/join.js';
import BottomNavigation from './BottomNavigation';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  if(false) //if login token doens't exist
    return <Join/>; //should go to terms of use page
    //return <LoginForm />;
  else //if login token exists(autologin)
    return (
      //to commit 

      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer> 
      
    );
}