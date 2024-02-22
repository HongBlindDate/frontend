import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from "./BottomNavigation"
import DetailProfile from '../screen/tab/proflie/detailProfile';
import ChangeProfile from '../screen/tab/proflie/changeProfile';
import ChangePicture from '../screen/tab/proflie/changePicture';
import ChangeIdeal from '../screen/tab/proflie/changeIdeal';
import ChangeMyKeyword from '../screen/tab/proflie/changeMyKeyword';
import ChangePersonalImformation from '../screen/tab/proflie/changePersonalImformation';
import MemberBreak from '../screen/tab/proflie/memberBreak';
import ChangePassword from '../screen/tab/proflie/changePassword';
import ChangeIdealKeyword from '../screen/tab/proflie/changeIdealKeyword';

import Start from '../screen/login/start';
import LoginForm from '../screen/login/loginForm';
import TermsOfUse from '../screen/login/termsOfUse';
import Join from '../screen/login/join';
import FindID from '../screen/login/findID';
import FindPW from '../screen/login/findPW';
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name = "MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}/>
          
          
          <Stack.Group> 
            <Stack.Screen name = 'DetailProfile' component={DetailProfile} />
            <Stack.Screen name = "ChangeProfile" component={ChangeProfile} />  
            <Stack.Screen name = "ChangePicture" component={ChangePicture} />
            <Stack.Screen name = "ChangeIdeal" component={ChangeIdeal} />
            <Stack.Screen name = "ChangeMyKeyword" component={ChangeMyKeyword} />
            <Stack.Screen name = "ChangePersonalImformation" component={ChangePersonalImformation} />
            <Stack.Screen name = "MemberBreak" component={MemberBreak} />
            <Stack.Screen name = "ChangePassword" component={ChangePassword} />
            <Stack.Screen name = 'ChangeIdealKeyword' component={ChangeIdealKeyword} />
          </Stack.Group>
          
         
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

export default StackNavigator;