import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import useCustomFonts from '../../utils/FontLoader';

import styles from './theme.js';

export default function Start({navigation}) {
    const fontLoaded = useCustomFonts();

    if (!fontLoaded) {
      return null; // Don't render anything until fonts are loaded
    }

    return (
        <View style={styles.container}>
          <View style={{flex: 658}}>
            <View style={{flex: 248}} />
            <View style={Styles.logoContainer}>
              <Text style={Styles.logo}>로고</Text>
              <View style={Styles.intro}>
                {/* font guide line */}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                <Text style={{fontSize: 20, fontFamily:'GongGothic'}}>홍개팅</Text>
                <Text style={{fontSize: 15, fontFamily:'Pretendard'}}>홍대생 매칭 서비스</Text> 
=======
=======
>>>>>>> Stashed changes
                <View style={{flex:29}}/>
                <Text style={styles.title1}>홍개팅</Text>
                <View style={{flex:6}}/>
                <Text style={Styles.semiTitleText}>홍대생 매칭 서비스</Text> 
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
              </View>
            </View>
            <View style={{flex: 249}} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('LoginForm')}}>
              <Text style={styles.buttonText}>시작하기</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:26}}/>
        </View>
    );
}

const Styles = StyleSheet.create({
  logoContainer: {
    flex: 161,
    width: "100%",
    justifyContent:"center",
    alignItems: "center",
  },
  logo: {
    flex: 80,
    justifyContent:"center",
    alignItems: "center",
    textAlignVertical: "center",
  },
  intro: {
    flex: 81,
    justifyContent:"center",
    alignItems: "center",
    textAlignVertical: "center",
  },
  semiTitleText: {
    fontSize: 14,
    fontFamily:'PretendardRegular',
  },
})