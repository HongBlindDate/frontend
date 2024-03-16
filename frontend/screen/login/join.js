import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

import styles from './theme.js';

export default function Join({navigation}) {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");
    const onChangeID = (payload) => setId(payload);
    const onChangePW = (payload) => setPw(payload);
    const onChangePWCheck = (payload) => setPwCheck(payload);
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [isIdUsable, setIsIdUsable] = useState(false);
    
    //중복확인 요청
    function requestDuplicateCheck(account) {
        $.ajax({
            type : 'post',
            uri: '/api/join/check-account/' + account,
            dataType: 'JSON',
            body : {
                "account" : account,
            },
            success: function (body) {
                if (body.status === 400) {
                    alert("잘못된 요청입니다.");
                } else if(body.status === 500){
                    alert("잘못된 요청입니다.");
                } else {
                    alert("알 수 없는 에러입니다.");
                }
            }
        })
        duplicateCheck(account);
    }
    //아이디가 중복인지 확인해서 중복이면 false, 아니면 true값 받음
    function duplicateCheck(account) {
        fetch("/api/join/check-account/"+account)
        .then((response) => response.json())
        .then((result) => {
            setIsIdUsable(result.body.success);
        })
        .catch((error) => {
            if (error.status === 400) {
                alert("잘못된 요청입니다.");
            } else if(error.status === 500){
                alert("잘못된 요청입니다.");
            } else {
                alert("알 수 없는 에러입니다.");
            }
        });
    }

    return(
        <View style={styles.container}>
            <View style={Styles.joinContainer}>
                <View style={{flex: 95}}/>
                <View style={Styles.idContainer}>
                    <View style={{flex: 17}}>
                        <Text style={styles.text4}>아이디</Text>
                    </View>
                    <View style={{flex: 10}}/>
                    <View style={{flex: 64}}>
                        <View style={Styles.box}>
                            <TextInput
                                value={id}
                                onChangeText={onChangeID}
                                placeholder={"아이디 입력"}
                                placeholderTextColor="#E1E2E4"
                                style={{...styles.inputText, flex:206}}
                            />
                            <View style={{flex: 8}}/>
                            {/*중복확인버튼*/}
                            {id == ""?
                            <TouchableOpacity
                                style={Styles.duplicateCheck} onPress disabled>
                                <Text style={{...styles.text3, color: "#ACB0B3"}}>중복확인</Text>
                            </TouchableOpacity>
                            : <TouchableOpacity
                                style={{...Styles.duplicateCheck, borderColor: "#ACB0B3"}}
                                onPress={()=> requestDuplicateCheck({onChangeID})}>
                                <Text style={{...styles.text3, color: "#BB2649"}}>중복확인</Text>
                            </TouchableOpacity>}
                        </View>
                        <View style={{flex: 8}}/>
                        <View style={{flex: 14}}>
                            {/* 수정해야됨!! duplicate checked-> 사용 가능한 아이디입니다.*/}
                            {!isIdUsable ? <Text style={styles.text5}>4~18자/영문, 숫자, 특수문자</Text> : <Text style={{...styles.text5, color: "#BB2649"}}>사용 가능한 아이디입니다.</Text>}
                        </View>
                    </View>
                </View>
                <View style={{flex: 22}}/>
                <View style={Styles.pwContainer}>
                    <View>
                        <Text style={styles.text4}>비밀번호</Text>
                    </View>
                    <View style={{flex: 10}}/>
                    <View style={{flex: 116}}>
                        <TextInput 
                            secureTextEntry={isPasswordSecure}
                            value={pw}
                            onChangeText={onChangePW}
                            placeholder={"비밀번호 입력"}
                            placeholderTextColor="#E1E2E4"
                            style={styles.inputText}
                        />
                        <View style={{flex: 10}}/>
                        <TextInput 
                            secureTextEntry={isPasswordSecure}
                            value={pwCheck}
                            onChangeText={onChangePWCheck}
                            placeholder={"비밀번호 확인"}
                            placeholderTextColor="#E1E2E4"
                            style={{...styles.inputText, borderColor : (pw == "" || pwCheck =="" || pw === pwCheck)?  "#E1E2E4" : "#BB2649"}}
                        />
                        <View style={{flex: 8}}/>
                        {/* 수정해야됨!! password check*/}
                        <View style={{flex: 14}}>
                            {(pwCheck == "" || pw === pwCheck) ? <Text style={styles.text5}>4~12자/영문, 숫자</Text> : <Text style={{...styles.text5, color: "#BB2649"}}>비밀번호가 일치하지 않습니다.</Text>}
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flex: 307}}/>
            <View style={styles.buttonContainer}>
                {/* 다음버튼. 중복확인, 비밀번호가 일치해야 누를 수 있음 */}
                {(id  == "" || pw == "") ? (<TouchableOpacity style={{...styles.button, backgroundColor: "#ACB0B3"}} onPress disabled>
                    <Text style={styles.buttonText}>다음</Text>
                </TouchableOpacity>) : (<TouchableOpacity style={{...styles.button}} onPress={() => navigation.navigate('Email')}>
                    <Text style={styles.buttonText}>다음</Text>
                </TouchableOpacity>)}
            </View>
            <View style={{flex: 26}}/>
        </View>
    );
}

const Styles = StyleSheet.create({
    joinContainer:{
        flex: 256,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    idContainer: {
        flex: 91,
        width: "100%",
    },
    pwContainer: {
        flex: 143,
        width: "100%",
    },
    duplicateCheck: {
        flex: 108,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "2%",
        borderWidth: 1.5,
        borderRadius: 7,
        borderColor: "#BB2649",
    },
    box: {
        flex: 42,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
    },
})