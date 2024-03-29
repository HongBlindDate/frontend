import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Start from '../screen/login/start';
import LoginForm from '../screen/login/loginForm';
import TermsOfUse from '../screen/login/termsOfUse';
import Join from '../screen/login/join';
import FindID from '../screen/login/findID';
import FindPW from '../screen/login/findPW';
import MainStackNavigator from './MainStackNavigator';

const Stack = createStackNavigator();

const LoginStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Group>
            <Stack.Screen name = "Start" component={Start} options={{ headerShown: false }}/>
            <Stack.Screen name = "LoginForm" component={LoginForm} options={{ headerShown: false }}/>
            <Stack.Screen name = "TermsOfUse" component={TermsOfUse} options={{ title: false }}/>
            <Stack.Screen name = "Join" component={Join} options={{ title: "회원가입" }}/>
            <Stack.Screen name = "FindID" component={FindID} />
            <Stack.Screen name = "FindPW" component={FindPW} />
        </Stack.Group>
      </Stack.Navigator>
    );
  };

export default LoginStackNavigator;