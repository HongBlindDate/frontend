import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';

import styles from './theme.js';

export default function Welcome({navigation}) {
    return(
        <View style={styles.container}>
            <View style={{flex:89}}/>
            <View style={Styles.welcomeContainer}>
                <View style={{flex:28}}>
                    <Text style={styles.title2}>환영합니다!</Text>
                </View>
                <View style={{flex:15}}/>
                <View style={{flex:34}}>
                    <Text style={styles.text6}>홍개팅과 함께 사랑 넘치는</Text><Text style={styles.text6}>캠퍼스라이프를 즐겨보세요.</Text>
                </View>
            </View>
            <View style={{flex:62}}/>
            <View style={Styles.pictureContainer}>
                <View style={{flex:15}}/>
            </View>
            <View style={{flex:110}}/>
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
    welcomeContainer: {
        flex: 77,
        justifyContent:"center",
        alignItems: "center",
        textAlignVertical: "center",
    },
    pictureContainer: {
        flex: 320,
        justifyContent:"center",
        alignItems: "center",
    }
})