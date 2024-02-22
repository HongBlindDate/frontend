//import AsyncStorage from '@react-native-async-storage/async-storage';

//if user logged in -> true , else false(need to login in)

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