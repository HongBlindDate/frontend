import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity, Alert } from 'react-native';

//after agreeing to the terms of use
export default function join(){
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
            <View>
                <Text style={styles.title}>Type your email to create an account</Text>
            </View>
            {/* email certification*/}
            <View style={styles.email}>
                <TextInput 
                    keyboardType="email-address"
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder={"type your Email Address"}
                    style={styles.input}
                />
                <Text style={styles.text}>@mail.hongik.ac.kr</Text>
            </View>
            <View>
                {/* if no input => cannot press join button */}
                {email == "" ? (<TouchableOpacity hitSlop={{left: 5, right: 5 }} style={{...styles.loginbutton, backgroundColor: "aliceblue"}} onPress={() => send()} disabled>
                    <Text style={{fontSize: 15}}>Send authentication number</Text>
                </TouchableOpacity>) : (<TouchableOpacity hitSlop={{bottom: 20, top: 20, left: 30, right: 30 }} style={styles.loginbutton} onPress={() => send()}>
                    <Text style={{fontSize: 15}}>Send authentication number</Text>
                </TouchableOpacity>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 50, 
        flex: 1,
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
        width: 200,
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
    loginbutton: {
        marginTop: 10,
        backgroundColor: "cornflowerblue",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
})