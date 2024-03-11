import React from 'react';
import 'react-native-gesture-handler';
import { Text, View, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import useCustomFonts from '../../utils/FontLoader';

export default function Start({navigation}) {
  const {width, height} = useWindowDimensions();
  const styles = makeStyles(width, height);
  const fontLoaded = useCustomFonts();

  if (!fontLoaded) {
    return null; // Don't render anything until fonts are loaded
  }
    return (
        <View style={styles.container}>
          <View style={styles.startContainer}>
            <View style={{flex: 3}} />
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>로고</Text>
              <View style={styles.intro}>
                <Text style={styles.titleText}>홍개팅</Text>
                <Text style={styles.descriptionText}>홍대생 매칭 서비스</Text>
                <Text>width: {width}</Text>
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

const makeStyles = (width, height) => StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  startContainer:{
    flex: 7,
  },
  logoContainer: {
    flex: 6,
    width: width,
    justifyContent:"center",
    alignItems: "center",
  },
  logo: {
    flex: 4,
    justifyContent:"center",
    alignItems: "center",
    textAlignVertical: "center",
  },
  intro: {
    flex: 2,
    justifyContent:"center",
    alignItems: "center",
    textAlignVertical: "center",
  },
  titleText: {
    fontSize: 25,
    fontFamily:'GongGothic',
  },
  descriptionText: {
    fontSize: 14,
    fontFamily:'GongGothic',
  },
  buttonContainer: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "#BB2649",
    borderRadius: 7,
    width: "90%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
})