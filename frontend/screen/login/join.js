import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Join({navigation}) {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");
    const onChangeID = (payload) => setId(payload);
    const onChangePW = (payload) => setPw(payload);
    const onChangePWCheck = (payload) => setPwCheck(payload);
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);

    return(
        <View style={styles.container}>
            <View style={styles.joinContainer}>
                <View style={{flex: 1}}/>
                <View style={styles.idContainer}>
                    <View>
                        <Text style={styles.title}>아이디</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={styles.box}>
                            <TextInput
                                value={id}
                                onChangeText={onChangeID}
                                placeholder={"아이디 입력"}
                                placeholderTextColor="#E1E2E4"
                                style={styles.IDinput}
                            />
                            <TouchableOpacity
                                style={styles.duplicateCheck}>
                                <Text style={{color: "#BB2649"}}>중복확인</Text>
                            </TouchableOpacity>
                        </View>
                        {/* 수정해야됨!! duplicate checked-> 사용 가능한 아이디입니다.*/}
                        {id == "" ? <Text style={{color: "#ACB0B3"}}>4~18자/영문, 숫자, 특수문자</Text> : <Text style={{color: "#BB2649"}}>사용 가능한 아이디입니다.</Text>}
                    </View>
                </View>
                <View style={styles.pwContainer}>
                    <View>
                        <Text style={styles.title}>비밀번호</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <TextInput 
                            secureTextEntry={isPasswordSecure}
                            value={pw}
                            onChangeText={onChangePW}
                            placeholder={"비밀번호 입력"}
                            placeholderTextColor="#E1E2E4"
                            style={styles.PWinput}
                        />
                        <TextInput 
                            secureTextEntry={isPasswordSecure}
                            value={pwCheck}
                            onChangeText={onChangePWCheck}
                            placeholder={"비밀번호 확인"}
                            placeholderTextColor="#E1E2E4"
                            style={styles.PWinput}
                            {...(pwCheck == "" || pw === pwCheck) ? style={borderColor: "#E1E2E4"} : style={borderColor: "#BB2649"}}
                        />
                        {/* 수정해야됨!! password check*/}
                        {(pwCheck == "" || pw === pwCheck) ? <Text style={{color: "#ACB0B3"}}>4~12자/영문, 숫자</Text> : <Text style={{color: "#BB2649"}}>비밀번호가 일치하지 않습니다.</Text>}
                    </View>
                </View>
                <View style={{flex: 3}}/>
            </View>
            <View style={styles.buttonContainer}>
                {/* if no input => cannot press next button */}
                {(id  == "" || pw == "") ? (<TouchableOpacity style={{...styles.button, backgroundColor: "#ACB0B3"}} onPress disabled>
                    <Text style={{fontSize: 15, color: "#FFFFFF"}}>다음</Text>
                </TouchableOpacity>) : (<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Email')}>
                    <Text style={{fontSize: 15}}>다음</Text>
                </TouchableOpacity>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    joinContainer:{
        flex: 7,
        paddingHorizontal: "5%",
    },
    title: {
        fontSize: 17,
        fontWeight: '500',
        color: "#626262",
    },
    idContainer: {
        flex: 1.1,
        marginBottom: "5%",
    },
    IDinput: {
        flex: 7,
        borderWidth: 1,
        borderColor: "#E1E2E4",
        borderRadius: 7,
        height: "90%",
        paddingHorizontal: "3%",
    },
    pwContainer: {
        flex: 1.7,
    },
    PWinput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#E1E2E4",
        borderRadius: 7,
        width: "100%",
        paddingHorizontal: "3%",
        marginVertical: "1%",
    },
    duplicateCheck: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "2%",
        borderWidth: 1.5,
        borderRadius: 7,
        borderColor: "#BB2649",
        width: "20%,",
        height: "90%",
    },
    box: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: "1%",
    },
    text: {
        fontSize: 15,
        padding: 5,
        paddingTop: 10,
    },
    buttonContainer: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
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