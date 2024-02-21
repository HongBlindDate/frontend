import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
    const toggleAutoLogin = () => {
        setAutoLogin(!autoLogin); //login toggle
      };

    const login = async() => {
        //check id & pw
        try{
            if (id !== "abc" || pw !== "abc") //login fail
                throw new SyntaxError("id or pw is wrong");
            if(id === "abc" & pw === "abc") //login success
                return Alert.alert("login success");
        } catch (e) {
            //error
            //back -> errorMessage
            // <Text>{errorMessage}</Text>
        } 
    }
    //auto login t/f
    //if 
    const join = async() =>{
        return;
    }
    const findID = async() =>{
        return;
    }
    const findPW = async() =>{
        return;
    }
    return (
        <View style={styles.container}>
            {/* logo */}
            <View style={styles.logo}>
                <Text style={{fontSize: 30, fontWeight: 600}}>홍대생만을 위한 매칭 서비스,{"\n"}
                <Text style={{color: '#BB2649'}}>홍개팅</Text>입니다.</Text>
                <Text style={{fontSize: 15, fontWeight: 600, color: '#626262'}}>회원 서비스 이용을 위해 로그인 해주세요.</Text>
            </View>
            {/* login input */}
            <View style={styles.login}>
                <View style={styles.idpw}>
                    <TextInput
                        value={id}
                        onChangeText={onChangeID}
                        placeholder={"아이디 입력"}
                        placeholderTextColor="#E1E2E4"
                        style={styles.input}
                    />
                </View>
                <View style={styles.idpw}>
                    <TextInput
                        secureTextEntry={isPasswordSecure}
                        value={pw}
                        onChangeText={onChangePW}
                        placeholder={"비밀번호 입력"}
                        placeholderTextColor="#E1E2E4"
                        style={styles.input}
                        />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <MaterialCommunityIcons
                            name={isPasswordSecure ? "eye-off" : "eye"}
                            size={28}
                            color={isPasswordSecure ? 'grey' : 'black'}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.idpw}>
                    {/* login_button */}
                    {/* if no input => cannot press login button */}
                    {id === "" || pw === "" ? (<TouchableOpacity hitSlop={{left: 5, right: 5 }} style={{...styles.loginbutton, backgroundColor: "#ACB0B3"}} onPress={() => login(key)} disabled>
                        <Text style={{fontSize: 15, color: "#FFFFFF"}}>로그인</Text>
                    </TouchableOpacity>) : (<TouchableOpacity style={styles.loginbutton} onPress={() => login(key)}>
                        <Text style={{fontSize: 15, color: "#FFFFFF"}}>로그인</Text>
                    </TouchableOpacity>)}
                </View>
            </View>
            <View style={styles.other}>
                <TouchableOpacity style={styles.otherThanLogin} onPress={() => {navigation.navigate('FindID')}}>
                    <Text>아이디 찾기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.otherThanLogin} onPress={() => {navigation.navigate('FindPW')}}>
                    <Text>비밀번호 찾기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.otherThanLogin} onPress={() => {navigation.navigate('TermsOfUse')}}>
                    <Text>회원가입</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:4.5}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    },
    logo: {
        flex: 3,
        width: "100%",
        alignItems: "flex-start",
        paddingHorizontal: "5%",
        justifyContent: "center",
        textAlign: "left",
    },
    text:{
        fontSize: 20,
    },
    login: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginVertical: "-10%",
    },
    input: {
        flex: 1,
        borderWidth: 1.5,
        borderColor: '#E1E2E4',
        borderRadius: 7,
        marginBottom: 10,
        padding: 5,
        color: "#BB2649",
    },
    idpw:{
        flexDirection: "row",
        width: "90%",
        height: "25%",
    },
    loginbutton: {
        marginTop: 5,
        backgroundColor: "#BB2649",
        borderRadius: 7,
        width: "100%",
        height: "75%",
        alignItems: "center",
        justifyContent: "center",
    },
    other: {
        flex: 0.5,
        paddingVertical: 0,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "70%",
    },
    otherThanLogin: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        justifyContent: "flex-start"
    },
})
//save login info