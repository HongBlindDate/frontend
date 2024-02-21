import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';

const Stack = createStackNavigator();

export default function Join({navigation}) {
    const [selectedDomain, setSelectedDomain] = useState('@mail.hongik.ac.kr');
    const [email, setEmail] = useState("");
    const onChangeEmail = (payload) => setEmail(payload);

    const send = () => {
        return (
            <View>
                {/* authentication submit button */}
                <TouchableOpacity hitSlop={{bottom: 20, top: 20, left: 30, right: 30 }} style={styles.loginbutton} onPress={() => submit()}>
                    <Text style={{fontSize: 15}}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
    const submit = () => {
        return;
    }

    return(
        <View style={styles.container}>
            <View style={styles.joinContainer}>
                <View>
                    <Text style={styles.title}>아이디</Text>
                </View>
                <View>
                    <Text style={styles.title}>비밀번호</Text>
                </View>
                <View>
                    <Text style={styles.title}>이메일</Text>
                </View>
                {/* email certification*/}
                <View style={styles.email}>
                    <TextInput 
                        keyboardType="email-address"
                        value={email}
                        onChangeText={onChangeEmail}
                        placeholder={"이메일"}
                        style={styles.input}
                    />
                    <Text style={styles.text}>@</Text>
                    {/* select between two emails */}
                    <Picker
                        selectedValue={selectedDomain}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => setSelectedDomain(itemValue)}
                    >
                        <Picker.Item label="mail.hongik.ac.kr" value="mail.hongik.ac.kr" />
                        <Picker.Item label="g.hongik.ac.kr" value="example.com" />
                    </Picker>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                {/* if no input => cannot press join button */}
                {email == "" ? (<TouchableOpacity hitSlop={{left: 5, right: 5 }} style={{...styles.button, backgroundColor: "#ACB0B3"}} onPress={() => send()} disabled>
                    <Text style={{fontSize: 15, color: "#FFFFFF"}}>인증번호 전송</Text>
                </TouchableOpacity>) : (<TouchableOpacity hitSlop={{bottom: 20, top: 20, left: 30, right: 30 }} style={styles.button} onPress={() => send()}>
                    <Text style={{fontSize: 15}}>인증번호 전송</Text>
                </TouchableOpacity>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
    },
    joinContainer:{
        flex: 7,
    },
    title: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginBottom: 10,
        width: "45%",
        padding: 5,
    },
    email: {
        flexDirection: "row",
    },
    text: {
        fontSize: 15,
        padding: 5,
        paddingTop: 10,
    },
    picker: {
        height: 50,
        width: '45%',
        backgroundColor: '#fafafa',
        borderRadius: 8,
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