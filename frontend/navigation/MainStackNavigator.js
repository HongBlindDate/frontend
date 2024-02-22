import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DetailProfile from '../screen/tab/profile/detailProfile';
import ChangeProfile from '../screen/tab/profile/changeProfile';
import ChangePicture from '../screen/tab/profile/changePicture';
import ChangeIdeal from '../screen/tab/profile/changeIdeal';
import ChangeMyKeyword from '../screen/tab/profile/changeMyKeyword';
import ChangePersonalImformation from '../screen/tab/profile/changePersonalImformation';
import MemberBreak from '../screen/tab/profile/memberBreak';
import ChangePassword from '../screen/tab/profile/changePassword';
import ChangeIdealKeyword from '../screen/tab/profile/changeIdealKeyword';

import BottomNavigation from './BottomNavigation';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name = "BottomNavigation"
          component={BottomNavigation}
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
      </Stack.Navigator>
    );
  };

export default MainStackNavigator;