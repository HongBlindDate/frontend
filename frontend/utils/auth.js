//import AsyncStorage from '@react-native-async-storage/async-storage';

// ����ڰ� �α����� ��쿡�� true��, �׷��� ���� ��쿡�� false�� ��ȯ�ϴ� �Լ�

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