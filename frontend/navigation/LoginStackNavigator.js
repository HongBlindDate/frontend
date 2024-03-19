import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import useCustomFonts from '../utils/FontLoader';
import CustomBackArrow from '../utils/customBackArrow';

import Start from '../screen/login/start';
import LoginForm from '../screen/login/loginForm';
import TermsOfUse from '../screen/login/termsOfUse';
import Join from '../screen/login/join';
import FindID from '../screen/login/findID';
import FindPW from '../screen/login/findPW';
import ProfileSetting1 from '../screen/settingProfile/profileSetting1';

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
            <Stack.Screen name = "ProfileSetting1" component={ProfileSetting1} 
            options={{headerStyle:{borderBottomWidth:0,  borderBottomColor: 'transperant', backgroundColor: 'white'},  headerBackTitleVisible:false, headerTitleStyle:{fontFamily:'PretendardMedium', fontSize:18}, title: '프로필 설정' , headerBackImage: () => (
              <CustomBackArrow /> // 사용자 정의 뒤로가기 아이콘을 표시합니다.
            ) }}/>  
        </Stack.Group>
      </Stack.Navigator>
    );
  };

export default LoginStackNavigator;