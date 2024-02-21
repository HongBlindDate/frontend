//import AsyncStorage from '@react-native-async-storage/async-storage';

// 사용자가 로그인한 경우에는 true를, 그렇지 않은 경우에는 false를 반환하는 함수

export const autoLoggedIn = () => {
    return false;
};

/*
export const autoLoggedIn = async () => {
  try {
    const userToken = await AsyncStorage.getItem('userToken');
    return userToken !== null;
  } catch (error) {
    console.error('Error checking login status:', error);
    return false;
  }
};
*/