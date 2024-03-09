import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Alert , Image, useWindowDimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';

import eye from '../../assets/images/eye.png';
import eye_off from '../../assets/images/eye-off.png';

//should get the key from backend
const key = "abc";
export default function LoginForm({navigation}) {
    const {width, height} = useWindowDimensions();
    const styles = makeStyles(width, height);
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    // const [status, setStatus] = useState("");
    // const [errorMessage, setErrorMessage] = useState("");
    const onChangeID = (payload) => setId(payload);
    const onChangePW = (payload) => setPw(payload);
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);

    const togglePasswordVisibility = () => {
        setIsPasswordSecure(!isPasswordSecure); //password eye toggle
      };
    const login = async() => {
        //check id & pw
        try{
            if (id !== "abc" || pw !== "abc") //login fail
                throw new SyntaxError("id or pw is wrong");
            if(id === "abc" && pw === "abc") //login success
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
            <View style={styles.intro}>
                <Text style={styles.textIntro}>홍대생만을 위한 매칭 서비스,{"\n"}
                <Text style={{color: '#BB2649'}}>홍개팅</Text>입니다.</Text>
                <Text style={styles.text}>{"\n"}회원 서비스 이용을 위해 로그인 해주세요.</Text>
            </View>
            {/* login input */}
            <View style={styles.loginContainer}>
                <View style={styles.login}>
                    <View style={styles.idpw}>
                        <TextInput
                            value={id}
                            onChangeText={onChangeID}
                            placeholder={"아이디 입력"}
                            placeholderTextColor="#E1E2E4"
                            style={styles.input}
                            underlineColor='transparent'
                            activeUnderlineColor='transparent'
                            selectionColor="#ACB0B3"
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
                            underlineColor='transparent'
                            activeUnderlineColor='transparent'
                            selectionColor="#ACB0B3"
                            right = {<TextInput.Icon
                                onPress={togglePasswordVisibility}
                                source={isPasswordSecure ? eye_off : eye}
                                color='#BB2649'
                            />}
                        />
                    </View>
                    <View style={styles.idpw}>
                        {/* login_button */}
                        {/* if no input => cannot press login button */}
                        {id === "" || pw === "" ? (<TouchableOpacity  style={{...styles.loginbutton, backgroundColor: "#ACB0B3"}} onPress={() => login(key)} disabled>
                            <Text style={styles.loginText}>로그인</Text>
                        </TouchableOpacity>) : (<TouchableOpacity style={styles.loginbutton} onPress={() => login(key)}>
                            <Text style={styles.loginText}>로그인</Text>
                        </TouchableOpacity>)}
                    </View>
                </View>
                <View style={styles.other}>
                    <TouchableOpacity style={styles.otherThanLogin} onPress={() => {navigation.navigate('FindID')}}>
                        <Text style={styles.otherText}>아이디 찾기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.otherThanLogin} onPress={() => {navigation.navigate('FindPW')}}>
                        <Text style={styles.otherText}>비밀번호 찾기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.otherThanLogin} onPress={() => {navigation.navigate('TermsOfUse')}}>
                        <Text style={styles.otherText}>회원가입</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:37}}/>
        </View>
    );
}

const makeStyles = (width, height) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: "5%",
    },
    intro: {
        flex: 37,
        width: "100%",
        alignItems: "flex-start",
        paddingHorizontal: "2%",
        justifyContent: "center",
        textAlign: "left",
    },
    textIntro:{
        fontSize: 20,
        fontFamily:'GongGothic',
    },
    text:{
        fontSize: 15,
        fontFamily:'Pretendard',
        color: "#626262",
    },
    loginContainer: {
        flex: 26,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "100%",
    },
    login: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    input: {
        flex: 1,
        justifyContent: "center",
        borderWidth: 1.5,
        borderColor: '#E1E2E4',
        borderRadius: 7,
        backgroundColor: "transparent",
    },
    idpw:{
        flex: 1,
        flexDirection: "row",
        width: "100%",
        marginVertical: "0.5%",
    },
    loginbutton: {
        marginTop: "2%",
        backgroundColor: "#BB2649",
        borderRadius: 7,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    loginText: {
        fontFamily:'Pretendard',
        color: "#FFFFFF",
    },
    other: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "65%",
    },
    otherText: {
        fontSize: 10,
    },
    otherThanLogin: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        justifyContent: "flex-start",
    },
})
//save login info