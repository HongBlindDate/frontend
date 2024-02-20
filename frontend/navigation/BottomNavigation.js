import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Profile from '../screen/proflie/profileMain.js';


function HomeScreen() {
  return <Text>Home</Text>;
}


function MessageScreen() {
  return <Text>Message</Text>;
}

const Tab = createBottomTabNavigator(); //bottom tab 생성을 위함

function BottomTab(){
  return (
    <Tab.Navigator initialRouteName="Home"> 
        <Tab.Screen
          name="Home" //navigation을 이용해 이동할 때 사용할 스트링 값
          component={HomeScreen} //해당 탭을 눌렀을 때 보여줄 화면 component
          options={{ 
            title: "홈",
            tabBarIcon: ({color, size}) => (
              <AntDesign name="home" size={24} color="black" />
            ),
          }}
        />

        <Tab.Screen
          name="Message"
          component={MessageScreen}
          options={{
            title: '메시지',
            tabBarIcon: ({color, size}) => (
              <AntDesign name="message1" size={24} color="black" />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: '프로필',
            tabBarIcon: ({color, size}) => (
              <AntDesign name="setting" size={24} color="black" />
            ),
          }}
        />  
       
      </Tab.Navigator>
  );
}


function Navigation() {
    return (
      <BottomTab />
    );
  }

  export default Navigation;