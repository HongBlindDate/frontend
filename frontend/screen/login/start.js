import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Intro({navigation}) {
    return (
        <View style={styles.container}>
          <View style={{flex: 8}}>
            <View style={{flex: 3}} />
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>로고</Text>
              <View style={styles.text}>
                <Text style={{fontSize: 20}}>홍개팅</Text>
                <Text style={{fontSize: 15}}>홍대생 매칭 서비스</Text>
              </View>
            </View>
            <View style={{flex: 3}} />
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('LoginForm')}}>
            <Text style={{fontSize: 15, color: "#FFFFFF"}}>시작하기</Text>
          </TouchableOpacity>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
  },
  logoContainer: {
    flex: 6,
    width: "100%",
    justifyContent:"center",
    alignItems: "center",
  },
  logo: {
    flex: 4,
    justifyContent:"center",
    alignItems: "center",
    textAlignVertical: "center",
  },
  text: {
    flex: 2,
    justifyContent:"center",
    alignItems: "center",
    textAlignVertical: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    marginTop: 5,
    backgroundColor: "#BB2649",
    borderRadius: 7,
    width: "90%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
})