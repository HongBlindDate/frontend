import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

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
                                placeholderFontFamily="PretendardMedium"
                                style={styles.IDinput}
                            />
                            {/*중복확인버튼*/}
                            {id == ""?
                            <TouchableOpacity
                                style={styles.duplicateCheck} onPress disabled>
                                <Text style={{color: "#ACB0B3"}}>중복확인</Text>
                            </TouchableOpacity>
                            : <TouchableOpacity
                                style={styles.duplicateCheck} onPress={()=> requestDuplicateCheck(onChangeID)}>
                                <Text style={{color: "#BB2649"}}>중복확인</Text>
                            </TouchableOpacity>}
                        </View>
                        {/* 수정해야됨!! duplicate checked-> 사용 가능한 아이디입니다.*/}
                        {!isIdUsable ? <Text style={{color: "#ACB0B3"}}>4~18자/영문, 숫자, 특수문자</Text> : <Text style={{color: "#BB2649"}}>사용 가능한 아이디입니다.</Text>}
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
                        {(pwCheck == "" || pw === pwCheck) ? <Text style={styles.text}>4~12자/영문, 숫자</Text> : <Text style={{...styles.text, color: "#BB2649"}}>비밀번호가 일치하지 않습니다.</Text>}
                    </View>
                </View>
                <View style={{flex: 3}}/>
            </View>
            <View style={styles.buttonContainer}>
                {/* 다음버튼. 중복확인, 비밀번호가 일치해야 누를 수 있음 */}
                {(id  == "" || pw == "") ? (<TouchableOpacity style={{...styles.button, backgroundColor: "#ACB0B3"}} onPress disabled>
                    <Text style={styles.buttonText}>다음</Text>
                </TouchableOpacity>) : (<TouchableOpacity style={{...styles.button}} onPress={() => navigation.navigate('Email')}>
                    <Text style={styles.buttonText}>다음</Text>
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
        fontSize: 14,
        fontWeight: '500',
        color: "#626262",
        fontFamily:'PretendardMedium',
    },
    idContainer: {
        flex: 1.1,
    },
    IDinput: {
        flex: 7,
        borderWidth: 1,
        borderColor: "#E1E2E4",
        borderRadius: 7,
        paddingHorizontal: "3%",
        fontFamily:'PretendardMedium',
        fontSize: 13,
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
        fontFamily:'PretendardMedium',
        fontSize: 13,
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
    },
    text: {
        fontSize: 12,
        fontFamily:'PretendardMedium',
        color: "#ACB0B3",
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
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 15,
        color: "white",
        fontFamily:'PretendardMedium',
    },
})