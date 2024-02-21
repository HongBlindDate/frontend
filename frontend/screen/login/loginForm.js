import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//should get the key from backend
const key = "abc";

export default function LoginForm() {
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
                <Text style={{fontSize: 50, fontWeight: 600}}>logo</Text>
            </View>
            {/* login input */}
            <View style={styles.login}>
                <View style={styles.idpw}>
                    <Text style={styles.text}>ID</Text>
                    <TextInput
                        value={id}
                        onChangeText={onChangeID}
                        placeholder={"type your ID"}
                        style={styles.input}
                    />
                </View>
                <View style={styles.idpw}>
                    <Text style={styles.text}>PW</Text>
                    <TextInput
                        secureTextEntry={isPasswordSecure}
                        value={pw}
                        onChangeText={onChangePW}
                        placeholder={"type your PW"}
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
            </View>
            {/* autologin select */}
            <View style={styles.autoLogin}>
                <TouchableOpacity onPress={toggleAutoLogin}>
                    {autoLogin ? (
                        <MaterialCommunityIcons
                            name="checkbox-blank-outline"
                            size={24}
                            color="black" />
                        ) : (
                        <MaterialCommunityIcons
                            name="checkbox-outline"
                            size={24}
                            color="black" />
                        )}
                </TouchableOpacity>
                <Text>auto login</Text>
            </View>
            {/* login_button */}
            <View>
                {/* if no input => cannot press login button */}
                {id === "" || pw === "" ? (<TouchableOpacity hitSlop={{left: 5, right: 5 }} style={{...styles.loginbutton, backgroundColor: "aliceblue"}} onPress={() => login(key)} disabled>
                    <Text style={{fontSize: 15}}>Login</Text>
                </TouchableOpacity>) : (<TouchableOpacity hitSlop={{bottom: 20, top: 20, left: 30, right: 30 }} style={styles.loginbutton} onPress={() => login(key)}>
                    <Text style={{fontSize: 15}}>Login</Text>
                </TouchableOpacity>)}
            </View>
            <View style={styles.other}>
                <TouchableOpacity style={styles.otherThanLogin} onPress={() => join()}>
                    <Text>Join</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.otherThanLogin} onPress={() => findID()}>
                    <Text>Find ID</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.otherThanLogin} onPress={() => findPW()}>
                    <Text>Find Password</Text>
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
    logo: {
        alignItems: "center",
        marginTop: -300,
    },
    text:{
        fontSize: 20,
    },
    login: {
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginBottom: 10,
        width: 200,
        padding: 5,
    },
    idpw:{
        flexDirection: "row",
    },
    autoLogin:{
        flexDirection: "row",
    },
    loginbutton: {
        marginTop: 10,
        backgroundColor: "cornflowerblue",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    other: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    otherThanLogin: {
        justifyContent: "space-evenly",
        padding: 5,
        alignItems: "center",
    },
})
//save login info