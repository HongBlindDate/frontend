import { StatusBar } from 'expo-status-bar';
import React from 'react';
import BottomNavigation from './navigation/BottomNavigation.js';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


//App의 시작, login이 되어있다면 메인화면, 로그인이 안되어있다면 로그인화면

//login이 되어있을 경우, 메인페이지(매칭)와 하단바
export default function App() {
  return (
    //to commit 

 
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer> 

    
    
  );
}