import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from "./BottomNavigation"
import DetailProfile from '../screen/proflie/detailProfile';
import ChangeProfile from '../screen/proflie/changeProfile';
import ChangePicture from '../screen/proflie/changePicture';
import ChangeIdeal from '../screen/proflie/changeIdeal';
import ChangeMyKeyword from '../screen/proflie/changeMyKeyword';
import ChangePersonalImformation from '../screen/proflie/changePersonalImformation';
import MemberBreak from '../screen/proflie/memberBreak';
import ChangePassword from '../screen/proflie/changePassword';
import ChangeIdealKeyword from '../screen/proflie/changeIdealKeyword';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name = "MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}/>
          <Stack.Screen name = 'DetailProfile' component={DetailProfile} />
          <Stack.Screen name = "ChangeProfile" component={ChangeProfile} />  
          <Stack.Screen name = "ChangePicture" component={ChangePicture} />
          <Stack.Screen name = "ChangeIdeal" component={ChangeIdeal} />
          <Stack.Screen name = "ChangeMyKeyword" component={ChangeMyKeyword} />
          <Stack.Screen name = "ChangePersonalImformation" component={ChangePersonalImformation} />
          <Stack.Screen name = "MemberBreak" component={MemberBreak} />
          <Stack.Screen name = "ChangePassword" component={ChangePassword} />
          <Stack.Screen name = 'ChangeIdealKeyword' component={ChangeIdealKeyword} />
      </Stack.Navigator>
    );
  };

export default StackNavigator;