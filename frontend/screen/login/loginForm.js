import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './theme.js';

//should get the key from backend
const key = "abc";

export default function LoginForm({navigation}) {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    // const [status, setStatus] = useState("");
    // const [errorMessage, setErrorMessage] = useState("");
    const onChangeID = (payload) => setId(payload);
    const onChangePW = (payload) => setPw(payload);
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [autoLogin, setAutoLogin] = useState(false);


    const togglePasswordVisibility = () => {
        setIsPasswordSecure(!isPasswordSecure); //password eye toggle
      };

    return (
        <View style={styles.container}>
            <View style={{flex:98}}/>
            <View style={styles.intro}>
                <Text style={styles.title2}>홍대생만을 위한 매칭 서비스,{"\n"}
                <Text style={{color: '#BB2649'}}>홍개팅</Text>입니다.</Text>
                <View style={{flex:12}}/>
                <Text style={styles.text1}>회원 서비스 이용을 위해 로그인 해주세요.</Text>
            </View>
            {/* login input */}
            <View style={{flex:86}}/>
            <View style={Styles.loginContainer}>
                <View style={Styles.idpw}>
                    <TextInput
                        value={id}
                        onChangeText={onChangeID}
                        placeholder={"아이디 입력"}
                        placeholderTextColor="#E1E2E4"
                        style={styles.inputText}
                    />
                </View>
                <View style={{flex:8}}/>
                <View style={Styles.idpw}>
                    <TextInput
                        secureTextEntry={isPasswordSecure}
                        value={pw}
                        onChangeText={onChangePW}
                        placeholder={"비밀번호 입력"}
                        placeholderTextColor="#E1E2E4"
                        style={styles.inputText}
                        />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <MaterialCommunityIcons
                            name={isPasswordSecure ? "eye-off" : "eye"}
                            size={28}
                            color={isPasswordSecure ? 'grey' : 'black'}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{flex:18}}/>
                <View styles={styles.buttonContainer}>
                    {/* login_button */}
                    {/* if no input => cannot press login button */}
                    {id === "" || pw === "" ? (<TouchableOpacity style={{...styles.button, backgroundColor: "#ACB0B3"}} onPress={() => login(key)} disabled>
                        <Text style={styles.buttonText}>로그인</Text>
                    </TouchableOpacity>) : (<TouchableOpacity style={styles.button} onPress={() => login(key)}>
                        <Text style={styles.buttonText}>로그인</Text>
                    </TouchableOpacity>)}
                </View>
            </View>
            <View style={{flex:22}}/>
            <View style={Styles.other}>
                <View style={{flex:78}}/>
                <TouchableOpacity style={Styles.otherThanLogin} onPress={() => {navigation.navigate('FindID')}}>
                    <Text style={styles.otherText}>아이디 찾기</Text>
                </TouchableOpacity>
                <View style={{flex:20}}/>
                <TouchableOpacity style={Styles.otherThanLogin} onPress={() => {navigation.navigate('FindPW')}}>
                    <Text style={styles.otherText}>비밀번호 찾기</Text>
                </TouchableOpacity>
                <View style={{flex:20}}/>
                <TouchableOpacity style={Styles.otherThanLogin} onPress={() => {navigation.navigate('TermsOfUse')}}>
                    <Text style={styles.otherText}>회원가입</Text>
                </TouchableOpacity>
                <View style={{flex:78}}/>
            </View>
            <View style={{flex:269}}/>
        </View>
    );
}

const Styles = StyleSheet.create({
    loginContainer: {
        flex: 154,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: 'black',
    },
    idpw:{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
    },
    other: {
        flex: 14,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    otherThanLogin: {
        flex: 55,
        alignItems: "center",
        justifyContent: "center",
    },
    otherText: {
        fontSize: 12,
        fontFamily: 'PretendardMedium',
    }
})
//save login info